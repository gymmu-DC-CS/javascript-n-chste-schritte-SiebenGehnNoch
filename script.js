export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement != "e")
      if (currentElement != "E") result.push(currentElement)
  }
  return result.join("")
}

export function aufgabe02(args) {
  return args.toUpperCase()
}

export function aufgabe03(args) {
  const input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      // result = result + 1
      // result += 1
      result++
    }
  }
  return result
}
for (let e = 0; e < input.length; e++) {
  const currentElement = input[e]
  if (currentElement === "e") {
  }
}
