(module
  (memory $memory 1)
  (export "memory" (memory $memory))

  (data (i32.const 0) "Hello World!")

  (func
    i32.const 0
    i32.const 12
    i32.store
  )
)