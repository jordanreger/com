(module
  (import "js" "fetch" (func $fetch (param $start i32) (param $length i32)))
  (memory $memory 1)
  (export "memory" (memory $memory))

  (data (i32.const 0) "/resources/fetch.txt")

  (func (export "fetch")
    i32.const 0
    i32.const 20
    call $fetch
  )
)