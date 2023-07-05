import { z } from 'zod';

export const RegisterUserSchema = z
  .object({
    name: z
      .string({
        required_error: 'Name is required'
      })
      .min(1, 'Full name is required'),
    email: z
      .string({
        required_error: 'Email is required'
      })
      .min(1, 'Email is required')
      .email('Email is invalid'),
    photo: z.string().optional(),
    password: z
      .string({
        required_error: 'Password is required'
      })
      .min(1, 'Password is required')
      .min(8, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters'),
    passwordConfirm: z
      .string({
        required_error: 'Confirm your password'
      })
      .min(1, 'Confirm your password')
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Passwords do not match'
  });

export const LoginUserSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required'
    })
    .min(1, 'Email is required')
    .email('Email is invalid'),
  password: z
    .string({
      required_error: 'Password is required'
    })
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters')
});

export const ReserveSchema = z.object({
  address: z.string({
    required_error: 'Address is required'
  }),
  location: z.string({
    required_error: 'Location is required'
  }),
  date: z.string({
    required_error: 'Date is required'
  }),
  time: z.string({
    required_error: 'Time is required'
  })
});

export type RegisterUserInput = z.infer<typeof RegisterUserSchema>;
export type LoginUserInput = z.infer<typeof LoginUserSchema>;
export type ReserveInput = z.infer<typeof ReserveSchema>;
