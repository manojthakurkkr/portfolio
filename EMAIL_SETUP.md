# Email Setup Guide

The contact form is now fully functional and will send emails to `manojthakurkkr@gmail.com`.

## Quick Setup (Recommended: Resend)

### Step 1: Get Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free tier)
3. Navigate to [API Keys](https://resend.com/api-keys)
4. Click "Create API Key"
5. Copy your API key (starts with `re_`)

### Step 2: Configure Environment Variable

1. Create a `.env.local` file in the root directory of your project
2. Add the following line:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

3. Replace `re_your_actual_api_key_here` with your actual API key

### Step 3: Restart Development Server

```bash
npm run dev
```

## Testing

1. Fill out the contact form on your portfolio
2. Submit the form
3. Check your email inbox at `manojthakurkkr@gmail.com`
4. You should receive an email with the form submission details

## Production Deployment

### Vercel

1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add `RESEND_API_KEY` with your API key value
4. Redeploy your application

### Other Platforms

Add `RESEND_API_KEY` as an environment variable in your hosting platform's settings.

## Development Mode (Without API Key)

If you don't set `RESEND_API_KEY`, the form will:
- Still work and show success message
- Log email details to the console (for testing)
- Not send actual emails

**Note:** For production, you must set the `RESEND_API_KEY` environment variable.

## Troubleshooting

- **Email not received?** Check your spam folder
- **API Error?** Verify your API key is correct and active
- **Form not submitting?** Check browser console for errors

## Alternative: EmailJS (Client-Side)

If you prefer a client-side solution without backend API routes, you can use EmailJS:

1. Sign up at [https://www.emailjs.com](https://www.emailjs.com)
2. Create an email service
3. Get your Public Key and Service ID
4. Update the Contact component to use EmailJS SDK

This requires modifying `components/Contact.tsx` to use EmailJS instead of the API route.

