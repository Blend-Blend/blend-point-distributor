
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model MoveFlowDailyPoint
 * 
 */
export type MoveFlowDailyPoint = $Result.DefaultSelection<Prisma.$MoveFlowDailyPointPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MoveFlowDailyPoints
 * const moveFlowDailyPoints = await prisma.moveFlowDailyPoint.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more MoveFlowDailyPoints
   * const moveFlowDailyPoints = await prisma.moveFlowDailyPoint.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.moveFlowDailyPoint`: Exposes CRUD operations for the **MoveFlowDailyPoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MoveFlowDailyPoints
    * const moveFlowDailyPoints = await prisma.moveFlowDailyPoint.findMany()
    * ```
    */
  get moveFlowDailyPoint(): Prisma.MoveFlowDailyPointDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    MoveFlowDailyPoint: 'MoveFlowDailyPoint'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "moveFlowDailyPoint"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MoveFlowDailyPoint: {
        payload: Prisma.$MoveFlowDailyPointPayload<ExtArgs>
        fields: Prisma.MoveFlowDailyPointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoveFlowDailyPointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoveFlowDailyPointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoveFlowDailyPointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoveFlowDailyPointPayload>
          }
          findFirst: {
            args: Prisma.MoveFlowDailyPointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoveFlowDailyPointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoveFlowDailyPointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoveFlowDailyPointPayload>
          }
          findMany: {
            args: Prisma.MoveFlowDailyPointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoveFlowDailyPointPayload>[]
          }
          create: {
            args: Prisma.MoveFlowDailyPointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoveFlowDailyPointPayload>
          }
          createMany: {
            args: Prisma.MoveFlowDailyPointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoveFlowDailyPointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoveFlowDailyPointPayload>[]
          }
          delete: {
            args: Prisma.MoveFlowDailyPointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoveFlowDailyPointPayload>
          }
          update: {
            args: Prisma.MoveFlowDailyPointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoveFlowDailyPointPayload>
          }
          deleteMany: {
            args: Prisma.MoveFlowDailyPointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoveFlowDailyPointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoveFlowDailyPointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoveFlowDailyPointPayload>[]
          }
          upsert: {
            args: Prisma.MoveFlowDailyPointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoveFlowDailyPointPayload>
          }
          aggregate: {
            args: Prisma.MoveFlowDailyPointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoveFlowDailyPoint>
          }
          groupBy: {
            args: Prisma.MoveFlowDailyPointGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoveFlowDailyPointGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoveFlowDailyPointCountArgs<ExtArgs>
            result: $Utils.Optional<MoveFlowDailyPointCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    moveFlowDailyPoint?: MoveFlowDailyPointOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model MoveFlowDailyPoint
   */

  export type AggregateMoveFlowDailyPoint = {
    _count: MoveFlowDailyPointCountAggregateOutputType | null
    _avg: MoveFlowDailyPointAvgAggregateOutputType | null
    _sum: MoveFlowDailyPointSumAggregateOutputType | null
    _min: MoveFlowDailyPointMinAggregateOutputType | null
    _max: MoveFlowDailyPointMaxAggregateOutputType | null
  }

  export type MoveFlowDailyPointAvgAggregateOutputType = {
    id: number | null
    stream_id: number | null
    stream_usd: number | null
    yuzu_lend: number | null
    yuzu_borrow: number | null
    blend_point: number | null
    yuzu_point: number | null
  }

  export type MoveFlowDailyPointSumAggregateOutputType = {
    id: number | null
    stream_id: number | null
    stream_usd: number | null
    yuzu_lend: number | null
    yuzu_borrow: number | null
    blend_point: number | null
    yuzu_point: number | null
  }

  export type MoveFlowDailyPointMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    stream_id: number | null
    stream_usd: number | null
    yuzu_lend: number | null
    yuzu_borrow: number | null
    blend_point: number | null
    yuzu_point: number | null
    send_date: string | null
    last_time: Date | null
  }

  export type MoveFlowDailyPointMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    stream_id: number | null
    stream_usd: number | null
    yuzu_lend: number | null
    yuzu_borrow: number | null
    blend_point: number | null
    yuzu_point: number | null
    send_date: string | null
    last_time: Date | null
  }

  export type MoveFlowDailyPointCountAggregateOutputType = {
    id: number
    user_id: number
    stream_id: number
    stream_usd: number
    yuzu_lend: number
    yuzu_borrow: number
    blend_point: number
    yuzu_point: number
    send_date: number
    last_time: number
    _all: number
  }


  export type MoveFlowDailyPointAvgAggregateInputType = {
    id?: true
    stream_id?: true
    stream_usd?: true
    yuzu_lend?: true
    yuzu_borrow?: true
    blend_point?: true
    yuzu_point?: true
  }

  export type MoveFlowDailyPointSumAggregateInputType = {
    id?: true
    stream_id?: true
    stream_usd?: true
    yuzu_lend?: true
    yuzu_borrow?: true
    blend_point?: true
    yuzu_point?: true
  }

  export type MoveFlowDailyPointMinAggregateInputType = {
    id?: true
    user_id?: true
    stream_id?: true
    stream_usd?: true
    yuzu_lend?: true
    yuzu_borrow?: true
    blend_point?: true
    yuzu_point?: true
    send_date?: true
    last_time?: true
  }

  export type MoveFlowDailyPointMaxAggregateInputType = {
    id?: true
    user_id?: true
    stream_id?: true
    stream_usd?: true
    yuzu_lend?: true
    yuzu_borrow?: true
    blend_point?: true
    yuzu_point?: true
    send_date?: true
    last_time?: true
  }

  export type MoveFlowDailyPointCountAggregateInputType = {
    id?: true
    user_id?: true
    stream_id?: true
    stream_usd?: true
    yuzu_lend?: true
    yuzu_borrow?: true
    blend_point?: true
    yuzu_point?: true
    send_date?: true
    last_time?: true
    _all?: true
  }

  export type MoveFlowDailyPointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoveFlowDailyPoint to aggregate.
     */
    where?: MoveFlowDailyPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoveFlowDailyPoints to fetch.
     */
    orderBy?: MoveFlowDailyPointOrderByWithRelationInput | MoveFlowDailyPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoveFlowDailyPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoveFlowDailyPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoveFlowDailyPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MoveFlowDailyPoints
    **/
    _count?: true | MoveFlowDailyPointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoveFlowDailyPointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoveFlowDailyPointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoveFlowDailyPointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoveFlowDailyPointMaxAggregateInputType
  }

  export type GetMoveFlowDailyPointAggregateType<T extends MoveFlowDailyPointAggregateArgs> = {
        [P in keyof T & keyof AggregateMoveFlowDailyPoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoveFlowDailyPoint[P]>
      : GetScalarType<T[P], AggregateMoveFlowDailyPoint[P]>
  }




  export type MoveFlowDailyPointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoveFlowDailyPointWhereInput
    orderBy?: MoveFlowDailyPointOrderByWithAggregationInput | MoveFlowDailyPointOrderByWithAggregationInput[]
    by: MoveFlowDailyPointScalarFieldEnum[] | MoveFlowDailyPointScalarFieldEnum
    having?: MoveFlowDailyPointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoveFlowDailyPointCountAggregateInputType | true
    _avg?: MoveFlowDailyPointAvgAggregateInputType
    _sum?: MoveFlowDailyPointSumAggregateInputType
    _min?: MoveFlowDailyPointMinAggregateInputType
    _max?: MoveFlowDailyPointMaxAggregateInputType
  }

  export type MoveFlowDailyPointGroupByOutputType = {
    id: number
    user_id: string
    stream_id: number
    stream_usd: number
    yuzu_lend: number
    yuzu_borrow: number
    blend_point: number
    yuzu_point: number
    send_date: string
    last_time: Date
    _count: MoveFlowDailyPointCountAggregateOutputType | null
    _avg: MoveFlowDailyPointAvgAggregateOutputType | null
    _sum: MoveFlowDailyPointSumAggregateOutputType | null
    _min: MoveFlowDailyPointMinAggregateOutputType | null
    _max: MoveFlowDailyPointMaxAggregateOutputType | null
  }

  type GetMoveFlowDailyPointGroupByPayload<T extends MoveFlowDailyPointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoveFlowDailyPointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoveFlowDailyPointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoveFlowDailyPointGroupByOutputType[P]>
            : GetScalarType<T[P], MoveFlowDailyPointGroupByOutputType[P]>
        }
      >
    >


  export type MoveFlowDailyPointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    stream_id?: boolean
    stream_usd?: boolean
    yuzu_lend?: boolean
    yuzu_borrow?: boolean
    blend_point?: boolean
    yuzu_point?: boolean
    send_date?: boolean
    last_time?: boolean
  }, ExtArgs["result"]["moveFlowDailyPoint"]>

  export type MoveFlowDailyPointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    stream_id?: boolean
    stream_usd?: boolean
    yuzu_lend?: boolean
    yuzu_borrow?: boolean
    blend_point?: boolean
    yuzu_point?: boolean
    send_date?: boolean
    last_time?: boolean
  }, ExtArgs["result"]["moveFlowDailyPoint"]>

  export type MoveFlowDailyPointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    stream_id?: boolean
    stream_usd?: boolean
    yuzu_lend?: boolean
    yuzu_borrow?: boolean
    blend_point?: boolean
    yuzu_point?: boolean
    send_date?: boolean
    last_time?: boolean
  }, ExtArgs["result"]["moveFlowDailyPoint"]>

  export type MoveFlowDailyPointSelectScalar = {
    id?: boolean
    user_id?: boolean
    stream_id?: boolean
    stream_usd?: boolean
    yuzu_lend?: boolean
    yuzu_borrow?: boolean
    blend_point?: boolean
    yuzu_point?: boolean
    send_date?: boolean
    last_time?: boolean
  }

  export type MoveFlowDailyPointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "stream_id" | "stream_usd" | "yuzu_lend" | "yuzu_borrow" | "blend_point" | "yuzu_point" | "send_date" | "last_time", ExtArgs["result"]["moveFlowDailyPoint"]>

  export type $MoveFlowDailyPointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MoveFlowDailyPoint"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      stream_id: number
      stream_usd: number
      yuzu_lend: number
      yuzu_borrow: number
      blend_point: number
      yuzu_point: number
      send_date: string
      last_time: Date
    }, ExtArgs["result"]["moveFlowDailyPoint"]>
    composites: {}
  }

  type MoveFlowDailyPointGetPayload<S extends boolean | null | undefined | MoveFlowDailyPointDefaultArgs> = $Result.GetResult<Prisma.$MoveFlowDailyPointPayload, S>

  type MoveFlowDailyPointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoveFlowDailyPointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoveFlowDailyPointCountAggregateInputType | true
    }

  export interface MoveFlowDailyPointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MoveFlowDailyPoint'], meta: { name: 'MoveFlowDailyPoint' } }
    /**
     * Find zero or one MoveFlowDailyPoint that matches the filter.
     * @param {MoveFlowDailyPointFindUniqueArgs} args - Arguments to find a MoveFlowDailyPoint
     * @example
     * // Get one MoveFlowDailyPoint
     * const moveFlowDailyPoint = await prisma.moveFlowDailyPoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoveFlowDailyPointFindUniqueArgs>(args: SelectSubset<T, MoveFlowDailyPointFindUniqueArgs<ExtArgs>>): Prisma__MoveFlowDailyPointClient<$Result.GetResult<Prisma.$MoveFlowDailyPointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MoveFlowDailyPoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoveFlowDailyPointFindUniqueOrThrowArgs} args - Arguments to find a MoveFlowDailyPoint
     * @example
     * // Get one MoveFlowDailyPoint
     * const moveFlowDailyPoint = await prisma.moveFlowDailyPoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoveFlowDailyPointFindUniqueOrThrowArgs>(args: SelectSubset<T, MoveFlowDailyPointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoveFlowDailyPointClient<$Result.GetResult<Prisma.$MoveFlowDailyPointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoveFlowDailyPoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFlowDailyPointFindFirstArgs} args - Arguments to find a MoveFlowDailyPoint
     * @example
     * // Get one MoveFlowDailyPoint
     * const moveFlowDailyPoint = await prisma.moveFlowDailyPoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoveFlowDailyPointFindFirstArgs>(args?: SelectSubset<T, MoveFlowDailyPointFindFirstArgs<ExtArgs>>): Prisma__MoveFlowDailyPointClient<$Result.GetResult<Prisma.$MoveFlowDailyPointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoveFlowDailyPoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFlowDailyPointFindFirstOrThrowArgs} args - Arguments to find a MoveFlowDailyPoint
     * @example
     * // Get one MoveFlowDailyPoint
     * const moveFlowDailyPoint = await prisma.moveFlowDailyPoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoveFlowDailyPointFindFirstOrThrowArgs>(args?: SelectSubset<T, MoveFlowDailyPointFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoveFlowDailyPointClient<$Result.GetResult<Prisma.$MoveFlowDailyPointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MoveFlowDailyPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFlowDailyPointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MoveFlowDailyPoints
     * const moveFlowDailyPoints = await prisma.moveFlowDailyPoint.findMany()
     * 
     * // Get first 10 MoveFlowDailyPoints
     * const moveFlowDailyPoints = await prisma.moveFlowDailyPoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moveFlowDailyPointWithIdOnly = await prisma.moveFlowDailyPoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoveFlowDailyPointFindManyArgs>(args?: SelectSubset<T, MoveFlowDailyPointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoveFlowDailyPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MoveFlowDailyPoint.
     * @param {MoveFlowDailyPointCreateArgs} args - Arguments to create a MoveFlowDailyPoint.
     * @example
     * // Create one MoveFlowDailyPoint
     * const MoveFlowDailyPoint = await prisma.moveFlowDailyPoint.create({
     *   data: {
     *     // ... data to create a MoveFlowDailyPoint
     *   }
     * })
     * 
     */
    create<T extends MoveFlowDailyPointCreateArgs>(args: SelectSubset<T, MoveFlowDailyPointCreateArgs<ExtArgs>>): Prisma__MoveFlowDailyPointClient<$Result.GetResult<Prisma.$MoveFlowDailyPointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MoveFlowDailyPoints.
     * @param {MoveFlowDailyPointCreateManyArgs} args - Arguments to create many MoveFlowDailyPoints.
     * @example
     * // Create many MoveFlowDailyPoints
     * const moveFlowDailyPoint = await prisma.moveFlowDailyPoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoveFlowDailyPointCreateManyArgs>(args?: SelectSubset<T, MoveFlowDailyPointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MoveFlowDailyPoints and returns the data saved in the database.
     * @param {MoveFlowDailyPointCreateManyAndReturnArgs} args - Arguments to create many MoveFlowDailyPoints.
     * @example
     * // Create many MoveFlowDailyPoints
     * const moveFlowDailyPoint = await prisma.moveFlowDailyPoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MoveFlowDailyPoints and only return the `id`
     * const moveFlowDailyPointWithIdOnly = await prisma.moveFlowDailyPoint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoveFlowDailyPointCreateManyAndReturnArgs>(args?: SelectSubset<T, MoveFlowDailyPointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoveFlowDailyPointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MoveFlowDailyPoint.
     * @param {MoveFlowDailyPointDeleteArgs} args - Arguments to delete one MoveFlowDailyPoint.
     * @example
     * // Delete one MoveFlowDailyPoint
     * const MoveFlowDailyPoint = await prisma.moveFlowDailyPoint.delete({
     *   where: {
     *     // ... filter to delete one MoveFlowDailyPoint
     *   }
     * })
     * 
     */
    delete<T extends MoveFlowDailyPointDeleteArgs>(args: SelectSubset<T, MoveFlowDailyPointDeleteArgs<ExtArgs>>): Prisma__MoveFlowDailyPointClient<$Result.GetResult<Prisma.$MoveFlowDailyPointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MoveFlowDailyPoint.
     * @param {MoveFlowDailyPointUpdateArgs} args - Arguments to update one MoveFlowDailyPoint.
     * @example
     * // Update one MoveFlowDailyPoint
     * const moveFlowDailyPoint = await prisma.moveFlowDailyPoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoveFlowDailyPointUpdateArgs>(args: SelectSubset<T, MoveFlowDailyPointUpdateArgs<ExtArgs>>): Prisma__MoveFlowDailyPointClient<$Result.GetResult<Prisma.$MoveFlowDailyPointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MoveFlowDailyPoints.
     * @param {MoveFlowDailyPointDeleteManyArgs} args - Arguments to filter MoveFlowDailyPoints to delete.
     * @example
     * // Delete a few MoveFlowDailyPoints
     * const { count } = await prisma.moveFlowDailyPoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoveFlowDailyPointDeleteManyArgs>(args?: SelectSubset<T, MoveFlowDailyPointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoveFlowDailyPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFlowDailyPointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MoveFlowDailyPoints
     * const moveFlowDailyPoint = await prisma.moveFlowDailyPoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoveFlowDailyPointUpdateManyArgs>(args: SelectSubset<T, MoveFlowDailyPointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoveFlowDailyPoints and returns the data updated in the database.
     * @param {MoveFlowDailyPointUpdateManyAndReturnArgs} args - Arguments to update many MoveFlowDailyPoints.
     * @example
     * // Update many MoveFlowDailyPoints
     * const moveFlowDailyPoint = await prisma.moveFlowDailyPoint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MoveFlowDailyPoints and only return the `id`
     * const moveFlowDailyPointWithIdOnly = await prisma.moveFlowDailyPoint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MoveFlowDailyPointUpdateManyAndReturnArgs>(args: SelectSubset<T, MoveFlowDailyPointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoveFlowDailyPointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MoveFlowDailyPoint.
     * @param {MoveFlowDailyPointUpsertArgs} args - Arguments to update or create a MoveFlowDailyPoint.
     * @example
     * // Update or create a MoveFlowDailyPoint
     * const moveFlowDailyPoint = await prisma.moveFlowDailyPoint.upsert({
     *   create: {
     *     // ... data to create a MoveFlowDailyPoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MoveFlowDailyPoint we want to update
     *   }
     * })
     */
    upsert<T extends MoveFlowDailyPointUpsertArgs>(args: SelectSubset<T, MoveFlowDailyPointUpsertArgs<ExtArgs>>): Prisma__MoveFlowDailyPointClient<$Result.GetResult<Prisma.$MoveFlowDailyPointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MoveFlowDailyPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFlowDailyPointCountArgs} args - Arguments to filter MoveFlowDailyPoints to count.
     * @example
     * // Count the number of MoveFlowDailyPoints
     * const count = await prisma.moveFlowDailyPoint.count({
     *   where: {
     *     // ... the filter for the MoveFlowDailyPoints we want to count
     *   }
     * })
    **/
    count<T extends MoveFlowDailyPointCountArgs>(
      args?: Subset<T, MoveFlowDailyPointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoveFlowDailyPointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MoveFlowDailyPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFlowDailyPointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoveFlowDailyPointAggregateArgs>(args: Subset<T, MoveFlowDailyPointAggregateArgs>): Prisma.PrismaPromise<GetMoveFlowDailyPointAggregateType<T>>

    /**
     * Group by MoveFlowDailyPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFlowDailyPointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MoveFlowDailyPointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoveFlowDailyPointGroupByArgs['orderBy'] }
        : { orderBy?: MoveFlowDailyPointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MoveFlowDailyPointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoveFlowDailyPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MoveFlowDailyPoint model
   */
  readonly fields: MoveFlowDailyPointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MoveFlowDailyPoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoveFlowDailyPointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MoveFlowDailyPoint model
   */
  interface MoveFlowDailyPointFieldRefs {
    readonly id: FieldRef<"MoveFlowDailyPoint", 'Int'>
    readonly user_id: FieldRef<"MoveFlowDailyPoint", 'String'>
    readonly stream_id: FieldRef<"MoveFlowDailyPoint", 'Float'>
    readonly stream_usd: FieldRef<"MoveFlowDailyPoint", 'Float'>
    readonly yuzu_lend: FieldRef<"MoveFlowDailyPoint", 'Float'>
    readonly yuzu_borrow: FieldRef<"MoveFlowDailyPoint", 'Float'>
    readonly blend_point: FieldRef<"MoveFlowDailyPoint", 'Float'>
    readonly yuzu_point: FieldRef<"MoveFlowDailyPoint", 'Float'>
    readonly send_date: FieldRef<"MoveFlowDailyPoint", 'String'>
    readonly last_time: FieldRef<"MoveFlowDailyPoint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MoveFlowDailyPoint findUnique
   */
  export type MoveFlowDailyPointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveFlowDailyPoint
     */
    select?: MoveFlowDailyPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoveFlowDailyPoint
     */
    omit?: MoveFlowDailyPointOmit<ExtArgs> | null
    /**
     * Filter, which MoveFlowDailyPoint to fetch.
     */
    where: MoveFlowDailyPointWhereUniqueInput
  }

  /**
   * MoveFlowDailyPoint findUniqueOrThrow
   */
  export type MoveFlowDailyPointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveFlowDailyPoint
     */
    select?: MoveFlowDailyPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoveFlowDailyPoint
     */
    omit?: MoveFlowDailyPointOmit<ExtArgs> | null
    /**
     * Filter, which MoveFlowDailyPoint to fetch.
     */
    where: MoveFlowDailyPointWhereUniqueInput
  }

  /**
   * MoveFlowDailyPoint findFirst
   */
  export type MoveFlowDailyPointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveFlowDailyPoint
     */
    select?: MoveFlowDailyPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoveFlowDailyPoint
     */
    omit?: MoveFlowDailyPointOmit<ExtArgs> | null
    /**
     * Filter, which MoveFlowDailyPoint to fetch.
     */
    where?: MoveFlowDailyPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoveFlowDailyPoints to fetch.
     */
    orderBy?: MoveFlowDailyPointOrderByWithRelationInput | MoveFlowDailyPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoveFlowDailyPoints.
     */
    cursor?: MoveFlowDailyPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoveFlowDailyPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoveFlowDailyPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoveFlowDailyPoints.
     */
    distinct?: MoveFlowDailyPointScalarFieldEnum | MoveFlowDailyPointScalarFieldEnum[]
  }

  /**
   * MoveFlowDailyPoint findFirstOrThrow
   */
  export type MoveFlowDailyPointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveFlowDailyPoint
     */
    select?: MoveFlowDailyPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoveFlowDailyPoint
     */
    omit?: MoveFlowDailyPointOmit<ExtArgs> | null
    /**
     * Filter, which MoveFlowDailyPoint to fetch.
     */
    where?: MoveFlowDailyPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoveFlowDailyPoints to fetch.
     */
    orderBy?: MoveFlowDailyPointOrderByWithRelationInput | MoveFlowDailyPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoveFlowDailyPoints.
     */
    cursor?: MoveFlowDailyPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoveFlowDailyPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoveFlowDailyPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoveFlowDailyPoints.
     */
    distinct?: MoveFlowDailyPointScalarFieldEnum | MoveFlowDailyPointScalarFieldEnum[]
  }

  /**
   * MoveFlowDailyPoint findMany
   */
  export type MoveFlowDailyPointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveFlowDailyPoint
     */
    select?: MoveFlowDailyPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoveFlowDailyPoint
     */
    omit?: MoveFlowDailyPointOmit<ExtArgs> | null
    /**
     * Filter, which MoveFlowDailyPoints to fetch.
     */
    where?: MoveFlowDailyPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoveFlowDailyPoints to fetch.
     */
    orderBy?: MoveFlowDailyPointOrderByWithRelationInput | MoveFlowDailyPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MoveFlowDailyPoints.
     */
    cursor?: MoveFlowDailyPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoveFlowDailyPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoveFlowDailyPoints.
     */
    skip?: number
    distinct?: MoveFlowDailyPointScalarFieldEnum | MoveFlowDailyPointScalarFieldEnum[]
  }

  /**
   * MoveFlowDailyPoint create
   */
  export type MoveFlowDailyPointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveFlowDailyPoint
     */
    select?: MoveFlowDailyPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoveFlowDailyPoint
     */
    omit?: MoveFlowDailyPointOmit<ExtArgs> | null
    /**
     * The data needed to create a MoveFlowDailyPoint.
     */
    data: XOR<MoveFlowDailyPointCreateInput, MoveFlowDailyPointUncheckedCreateInput>
  }

  /**
   * MoveFlowDailyPoint createMany
   */
  export type MoveFlowDailyPointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MoveFlowDailyPoints.
     */
    data: MoveFlowDailyPointCreateManyInput | MoveFlowDailyPointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MoveFlowDailyPoint createManyAndReturn
   */
  export type MoveFlowDailyPointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveFlowDailyPoint
     */
    select?: MoveFlowDailyPointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoveFlowDailyPoint
     */
    omit?: MoveFlowDailyPointOmit<ExtArgs> | null
    /**
     * The data used to create many MoveFlowDailyPoints.
     */
    data: MoveFlowDailyPointCreateManyInput | MoveFlowDailyPointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MoveFlowDailyPoint update
   */
  export type MoveFlowDailyPointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveFlowDailyPoint
     */
    select?: MoveFlowDailyPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoveFlowDailyPoint
     */
    omit?: MoveFlowDailyPointOmit<ExtArgs> | null
    /**
     * The data needed to update a MoveFlowDailyPoint.
     */
    data: XOR<MoveFlowDailyPointUpdateInput, MoveFlowDailyPointUncheckedUpdateInput>
    /**
     * Choose, which MoveFlowDailyPoint to update.
     */
    where: MoveFlowDailyPointWhereUniqueInput
  }

  /**
   * MoveFlowDailyPoint updateMany
   */
  export type MoveFlowDailyPointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MoveFlowDailyPoints.
     */
    data: XOR<MoveFlowDailyPointUpdateManyMutationInput, MoveFlowDailyPointUncheckedUpdateManyInput>
    /**
     * Filter which MoveFlowDailyPoints to update
     */
    where?: MoveFlowDailyPointWhereInput
    /**
     * Limit how many MoveFlowDailyPoints to update.
     */
    limit?: number
  }

  /**
   * MoveFlowDailyPoint updateManyAndReturn
   */
  export type MoveFlowDailyPointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveFlowDailyPoint
     */
    select?: MoveFlowDailyPointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoveFlowDailyPoint
     */
    omit?: MoveFlowDailyPointOmit<ExtArgs> | null
    /**
     * The data used to update MoveFlowDailyPoints.
     */
    data: XOR<MoveFlowDailyPointUpdateManyMutationInput, MoveFlowDailyPointUncheckedUpdateManyInput>
    /**
     * Filter which MoveFlowDailyPoints to update
     */
    where?: MoveFlowDailyPointWhereInput
    /**
     * Limit how many MoveFlowDailyPoints to update.
     */
    limit?: number
  }

  /**
   * MoveFlowDailyPoint upsert
   */
  export type MoveFlowDailyPointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveFlowDailyPoint
     */
    select?: MoveFlowDailyPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoveFlowDailyPoint
     */
    omit?: MoveFlowDailyPointOmit<ExtArgs> | null
    /**
     * The filter to search for the MoveFlowDailyPoint to update in case it exists.
     */
    where: MoveFlowDailyPointWhereUniqueInput
    /**
     * In case the MoveFlowDailyPoint found by the `where` argument doesn't exist, create a new MoveFlowDailyPoint with this data.
     */
    create: XOR<MoveFlowDailyPointCreateInput, MoveFlowDailyPointUncheckedCreateInput>
    /**
     * In case the MoveFlowDailyPoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoveFlowDailyPointUpdateInput, MoveFlowDailyPointUncheckedUpdateInput>
  }

  /**
   * MoveFlowDailyPoint delete
   */
  export type MoveFlowDailyPointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveFlowDailyPoint
     */
    select?: MoveFlowDailyPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoveFlowDailyPoint
     */
    omit?: MoveFlowDailyPointOmit<ExtArgs> | null
    /**
     * Filter which MoveFlowDailyPoint to delete.
     */
    where: MoveFlowDailyPointWhereUniqueInput
  }

  /**
   * MoveFlowDailyPoint deleteMany
   */
  export type MoveFlowDailyPointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoveFlowDailyPoints to delete
     */
    where?: MoveFlowDailyPointWhereInput
    /**
     * Limit how many MoveFlowDailyPoints to delete.
     */
    limit?: number
  }

  /**
   * MoveFlowDailyPoint without action
   */
  export type MoveFlowDailyPointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoveFlowDailyPoint
     */
    select?: MoveFlowDailyPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoveFlowDailyPoint
     */
    omit?: MoveFlowDailyPointOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MoveFlowDailyPointScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    stream_id: 'stream_id',
    stream_usd: 'stream_usd',
    yuzu_lend: 'yuzu_lend',
    yuzu_borrow: 'yuzu_borrow',
    blend_point: 'blend_point',
    yuzu_point: 'yuzu_point',
    send_date: 'send_date',
    last_time: 'last_time'
  };

  export type MoveFlowDailyPointScalarFieldEnum = (typeof MoveFlowDailyPointScalarFieldEnum)[keyof typeof MoveFlowDailyPointScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type MoveFlowDailyPointWhereInput = {
    AND?: MoveFlowDailyPointWhereInput | MoveFlowDailyPointWhereInput[]
    OR?: MoveFlowDailyPointWhereInput[]
    NOT?: MoveFlowDailyPointWhereInput | MoveFlowDailyPointWhereInput[]
    id?: IntFilter<"MoveFlowDailyPoint"> | number
    user_id?: StringFilter<"MoveFlowDailyPoint"> | string
    stream_id?: FloatFilter<"MoveFlowDailyPoint"> | number
    stream_usd?: FloatFilter<"MoveFlowDailyPoint"> | number
    yuzu_lend?: FloatFilter<"MoveFlowDailyPoint"> | number
    yuzu_borrow?: FloatFilter<"MoveFlowDailyPoint"> | number
    blend_point?: FloatFilter<"MoveFlowDailyPoint"> | number
    yuzu_point?: FloatFilter<"MoveFlowDailyPoint"> | number
    send_date?: StringFilter<"MoveFlowDailyPoint"> | string
    last_time?: DateTimeFilter<"MoveFlowDailyPoint"> | Date | string
  }

  export type MoveFlowDailyPointOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    stream_id?: SortOrder
    stream_usd?: SortOrder
    yuzu_lend?: SortOrder
    yuzu_borrow?: SortOrder
    blend_point?: SortOrder
    yuzu_point?: SortOrder
    send_date?: SortOrder
    last_time?: SortOrder
  }

  export type MoveFlowDailyPointWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_send_date?: MoveFlowDailyPointUser_idSend_dateCompoundUniqueInput
    AND?: MoveFlowDailyPointWhereInput | MoveFlowDailyPointWhereInput[]
    OR?: MoveFlowDailyPointWhereInput[]
    NOT?: MoveFlowDailyPointWhereInput | MoveFlowDailyPointWhereInput[]
    user_id?: StringFilter<"MoveFlowDailyPoint"> | string
    stream_id?: FloatFilter<"MoveFlowDailyPoint"> | number
    stream_usd?: FloatFilter<"MoveFlowDailyPoint"> | number
    yuzu_lend?: FloatFilter<"MoveFlowDailyPoint"> | number
    yuzu_borrow?: FloatFilter<"MoveFlowDailyPoint"> | number
    blend_point?: FloatFilter<"MoveFlowDailyPoint"> | number
    yuzu_point?: FloatFilter<"MoveFlowDailyPoint"> | number
    send_date?: StringFilter<"MoveFlowDailyPoint"> | string
    last_time?: DateTimeFilter<"MoveFlowDailyPoint"> | Date | string
  }, "id" | "user_id_send_date">

  export type MoveFlowDailyPointOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    stream_id?: SortOrder
    stream_usd?: SortOrder
    yuzu_lend?: SortOrder
    yuzu_borrow?: SortOrder
    blend_point?: SortOrder
    yuzu_point?: SortOrder
    send_date?: SortOrder
    last_time?: SortOrder
    _count?: MoveFlowDailyPointCountOrderByAggregateInput
    _avg?: MoveFlowDailyPointAvgOrderByAggregateInput
    _max?: MoveFlowDailyPointMaxOrderByAggregateInput
    _min?: MoveFlowDailyPointMinOrderByAggregateInput
    _sum?: MoveFlowDailyPointSumOrderByAggregateInput
  }

  export type MoveFlowDailyPointScalarWhereWithAggregatesInput = {
    AND?: MoveFlowDailyPointScalarWhereWithAggregatesInput | MoveFlowDailyPointScalarWhereWithAggregatesInput[]
    OR?: MoveFlowDailyPointScalarWhereWithAggregatesInput[]
    NOT?: MoveFlowDailyPointScalarWhereWithAggregatesInput | MoveFlowDailyPointScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MoveFlowDailyPoint"> | number
    user_id?: StringWithAggregatesFilter<"MoveFlowDailyPoint"> | string
    stream_id?: FloatWithAggregatesFilter<"MoveFlowDailyPoint"> | number
    stream_usd?: FloatWithAggregatesFilter<"MoveFlowDailyPoint"> | number
    yuzu_lend?: FloatWithAggregatesFilter<"MoveFlowDailyPoint"> | number
    yuzu_borrow?: FloatWithAggregatesFilter<"MoveFlowDailyPoint"> | number
    blend_point?: FloatWithAggregatesFilter<"MoveFlowDailyPoint"> | number
    yuzu_point?: FloatWithAggregatesFilter<"MoveFlowDailyPoint"> | number
    send_date?: StringWithAggregatesFilter<"MoveFlowDailyPoint"> | string
    last_time?: DateTimeWithAggregatesFilter<"MoveFlowDailyPoint"> | Date | string
  }

  export type MoveFlowDailyPointCreateInput = {
    user_id: string
    stream_id: number
    stream_usd: number
    yuzu_lend: number
    yuzu_borrow: number
    blend_point: number
    yuzu_point: number
    send_date: string
    last_time?: Date | string
  }

  export type MoveFlowDailyPointUncheckedCreateInput = {
    id?: number
    user_id: string
    stream_id: number
    stream_usd: number
    yuzu_lend: number
    yuzu_borrow: number
    blend_point: number
    yuzu_point: number
    send_date: string
    last_time?: Date | string
  }

  export type MoveFlowDailyPointUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    stream_id?: FloatFieldUpdateOperationsInput | number
    stream_usd?: FloatFieldUpdateOperationsInput | number
    yuzu_lend?: FloatFieldUpdateOperationsInput | number
    yuzu_borrow?: FloatFieldUpdateOperationsInput | number
    blend_point?: FloatFieldUpdateOperationsInput | number
    yuzu_point?: FloatFieldUpdateOperationsInput | number
    send_date?: StringFieldUpdateOperationsInput | string
    last_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveFlowDailyPointUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    stream_id?: FloatFieldUpdateOperationsInput | number
    stream_usd?: FloatFieldUpdateOperationsInput | number
    yuzu_lend?: FloatFieldUpdateOperationsInput | number
    yuzu_borrow?: FloatFieldUpdateOperationsInput | number
    blend_point?: FloatFieldUpdateOperationsInput | number
    yuzu_point?: FloatFieldUpdateOperationsInput | number
    send_date?: StringFieldUpdateOperationsInput | string
    last_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveFlowDailyPointCreateManyInput = {
    id?: number
    user_id: string
    stream_id: number
    stream_usd: number
    yuzu_lend: number
    yuzu_borrow: number
    blend_point: number
    yuzu_point: number
    send_date: string
    last_time?: Date | string
  }

  export type MoveFlowDailyPointUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    stream_id?: FloatFieldUpdateOperationsInput | number
    stream_usd?: FloatFieldUpdateOperationsInput | number
    yuzu_lend?: FloatFieldUpdateOperationsInput | number
    yuzu_borrow?: FloatFieldUpdateOperationsInput | number
    blend_point?: FloatFieldUpdateOperationsInput | number
    yuzu_point?: FloatFieldUpdateOperationsInput | number
    send_date?: StringFieldUpdateOperationsInput | string
    last_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveFlowDailyPointUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    stream_id?: FloatFieldUpdateOperationsInput | number
    stream_usd?: FloatFieldUpdateOperationsInput | number
    yuzu_lend?: FloatFieldUpdateOperationsInput | number
    yuzu_borrow?: FloatFieldUpdateOperationsInput | number
    blend_point?: FloatFieldUpdateOperationsInput | number
    yuzu_point?: FloatFieldUpdateOperationsInput | number
    send_date?: StringFieldUpdateOperationsInput | string
    last_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MoveFlowDailyPointUser_idSend_dateCompoundUniqueInput = {
    user_id: string
    send_date: string
  }

  export type MoveFlowDailyPointCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    stream_id?: SortOrder
    stream_usd?: SortOrder
    yuzu_lend?: SortOrder
    yuzu_borrow?: SortOrder
    blend_point?: SortOrder
    yuzu_point?: SortOrder
    send_date?: SortOrder
    last_time?: SortOrder
  }

  export type MoveFlowDailyPointAvgOrderByAggregateInput = {
    id?: SortOrder
    stream_id?: SortOrder
    stream_usd?: SortOrder
    yuzu_lend?: SortOrder
    yuzu_borrow?: SortOrder
    blend_point?: SortOrder
    yuzu_point?: SortOrder
  }

  export type MoveFlowDailyPointMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    stream_id?: SortOrder
    stream_usd?: SortOrder
    yuzu_lend?: SortOrder
    yuzu_borrow?: SortOrder
    blend_point?: SortOrder
    yuzu_point?: SortOrder
    send_date?: SortOrder
    last_time?: SortOrder
  }

  export type MoveFlowDailyPointMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    stream_id?: SortOrder
    stream_usd?: SortOrder
    yuzu_lend?: SortOrder
    yuzu_borrow?: SortOrder
    blend_point?: SortOrder
    yuzu_point?: SortOrder
    send_date?: SortOrder
    last_time?: SortOrder
  }

  export type MoveFlowDailyPointSumOrderByAggregateInput = {
    id?: SortOrder
    stream_id?: SortOrder
    stream_usd?: SortOrder
    yuzu_lend?: SortOrder
    yuzu_borrow?: SortOrder
    blend_point?: SortOrder
    yuzu_point?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}