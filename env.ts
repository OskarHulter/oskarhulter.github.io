import { parseEnv, z, port } from "znv"

export const { API_SERVER, HOST, PORT, EDITORS, POST_LIMIT, AUTH_SERVER } =
  parseEnv(process.env, {
    // you can provide defaults with `.default()`. these will be validated
    // against the schema.
    API_SERVER: z.string().url().default("https://api.llamafy.biz"),

    // specs can also be more detailed.
    HOST: {
      schema: z.string().min(1),

      // the description is handy as in-code documentation, but is also printed
      // to the console if validation for this env var fails.
      description: "The hostname for this service.",

      // instead of specifying defaults as part of the zod schema, you can pass
      // them in the `defaults` object. a default will be matched based on the
      // value of `NODE_ENV`.
      defaults: {
        production: "my-cool-llama.website",
        test: "cool-llama-staging.cloud-provider.zone",

        // "_" is a special token that can be used in `defaults`. its value will
        // be used if `NODE_ENV` doesn't match any other provided key.
        _: "localhost",
      },
    },

    // znv provides helpers for a few very common environment var types not
    // covered by zod. these can have further refinements chained to them:
    PORT: port().default(8080),

    // using a zod `array()` or `object()` as a spec will make znv attempt to
    // `JSON.parse` the env var if it's present.
    EDITORS: z.array(z.string().min(1)),

    // optional values are also supported and provide a way to benefit from the
    // validation and static typing provided by zod even if you don't want to
    // error out on a missing value.
    POST_LIMIT: z.number().optional(),

    // use all of the expressiveness of zod, including enums and post-processing.
    AUTH_SERVER: z
      .enum(["prod", "staging"])
      .optional()
      .transform((prefix) =>
        prefix ? `http://auth-${prefix}.cool-llama.app` : "http://localhost:91"
      ),
  })

export const { CLOUDINARY_URL } = parseEnv(process.env, {
  CLOUDINARY_URL: z.string().min(1),
})

console.log([CLOUDINARY_URL].join(", "))


/*
robots.txt

User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /
*/
