import { z } from 'zod';

class Zodschema {
  SignUpSchema = z.object({
    firstName: z
      .string()
      .min(2)
      .regex(/^[A-Za-z'áéíóúâêôãõçüñ\s]{2,}$/),
    lastName: z
      .string()
      .min(2)
      .regex(/^[A-Za-z'áéíóúâêôãõçüñ\s]{2,}$/),
    country: z.string({ error: 'Please select a Country' }).min(3),
    city: z.string({ error: 'Please select a City' }).min(3),
    pincode: z.string({ error: 'Please enter a valid pincode' }).min(3).max(10),
    age: z.number({ error: 'Please enter valid age' }).gt(10).lt(100),
  });
}

export default new Zodschema();
