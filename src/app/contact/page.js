'use client'
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function IndexPage() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur'
  });

  // Enum for our statuses
  const contactStatuses = {
    loading: 'loading',
    submitted: 'submitted',
    error: 'error'
  };

  // Status of what's happening or happened in the component
  const [status, setStatus] = useState();

  // Our onSubmit function, which is called from react-hook-form handleSubmit
  // react-hook-form handleSubmit will pass our onSubmit the data object and event
  const onSubmit = (data, e) => {
    // Used to Abort a long running fetch.
    const abortLongFetch = new AbortController();
    // Abort after 7 seconds.
    const abortTimeoutId = setTimeout(() => abortLongFetch.abort(), 7000);

    // Don't want to actually submit the form
    e.preventDefault();

    // Loading
    setStatus(contactStatuses.loading);

    // You can change this fetch URL to a bad url to see the .catch() block hit
    // Example: '/api/contact-bad'
    fetch('/api/contact', {
      signal: abortLongFetch.signal,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        if (res.ok) {
          // If we got an 'ok' response from fetch, clear the AbortController timeout
          clearTimeout(abortTimeoutId);
          return res.json();
        }
        // If the response was anything besides 'ok', throw an error to hit our .catch() block
        throw new Error('Whoops! Error sending email.');
      })
      .then((res) => {
        // On a successful search, set the status to 'submitted' and reset the fields
        setStatus(contactStatuses.submitted);
        reset();
      })
      .catch((err) => {
        // There was an error, catch it and set the status to 'error'
        setStatus(contactStatuses.error);
      });
  };

  // Email Form Validation RegEx used in client-side validation with react-hook-form
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Standard error message for required form fields
  const requiredFieldErrorMsg = 'This field is required';

  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
      {/* If there was an error, notify the user */}
      {status === contactStatuses.error ? (
        <div className="alert alert-danger">
          Oops, there was an error sending your email. Please try again.
        </div>
      ) : null}

      {/* If the form was submitted successfully, notify the user */}
      {status === contactStatuses.submitted ? (
        <div className="alert alert-success contact_msg" role="alert">
          Your message was sent successfully.
        </div>
      ) : null}



      {/* 'email' input registered with react-hook-form and required + email regex validation */}
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
      <div >
        <input className="w-60 p-2 bg-transparent border-2 rounded-md  focus:outline-none m-2"
          id="contactEmail"
          type="email"
          aria-invalid={errors.email}
          aria-describedby="email-error"
          autoComplete="name"
          placeholder="Email"
          {...register('email', {
            required: requiredFieldErrorMsg,
            pattern: {
              value: emailRegex,
              message:
                'A valid email address id required. Example: name@domain.com.'
            }
          })}
        />
        {errors.email && (
          <span id="email-error" className="formValidationError text-orange-500">
            {errors.email.message}
          </span>
        )}
      </div>

      {/* 'subject' input registered with react-hook-form and simple validation */}
      <div>
        <input className="w-60 p-2 bg-transparent border-2 rounded-md  focus:outline-none m-2"
          id="contactSubject"
          type="text"
          aria-invalid={errors.subject}
          aria-describedby="subject-error"
          placeholder="Subject"
          {...register('subject', {
            required: requiredFieldErrorMsg
          })}
        />
        {errors.subject && (
          <span id="subject-error" className="formValidationError text-orange-500">
            {errors.subject.message}
          </span>
        )}
</div>
      {/* 'message' textarea registered with react-hook-form and simple validation */}
      <div >

        <textarea
          id="contactMessage"
          rows="7"
          className="w-60 p-2 m-2 bg-transparent border-2 rounded-md focus:outline-none"
          placeholder='Message'
          aria-invalid={errors.message}
          aria-describedby="message-error"
          {...register('message', {
            required: requiredFieldErrorMsg
          })}
        ></textarea>
        {errors.message && (
          <span id="message-error" className="p-2 formValidationError  text-orange-500">
            {errors.message.message}
          </span>
        )}
      </div>

      {/* Send Mesage button, will be disabled while loading and show an icon with a message */}
      <button
        type="submit"
        className="btn btn-primary btn-send-message"
        disabled={status === contactStatuses.loading}
      >
        {status === contactStatuses.loading ? (
          <>
            <i className="fa-solid fa-spinner fa-spin"></i>Sending...
          </>
        ) : (
          <>Send Message</>
        )}
      </button>
      </div>
    </form>
  );
}
