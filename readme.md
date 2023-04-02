# useIsScrolledDown

## Description

Use this React hook when you have a sticky topnav and you want to know when the user has scrolled down so you can change the nav styles.

A ref (`is_scrolled_down_ref`) is returned from the hook, and that ref should go in an absolutely positioned element at the top of the page, as shown below. The `is_scrolled_down` value returned from the hook is a boolean that tells you -- you guessed it -- whether the user has scrolled down. Use it to style your topnav, or whatever your heart desires.

## Usage

```tsx
import { useIsScrolledDown } from "sjc/hooks/use-is-scrolled-down/use-is-scrolled-down"

export default function App() {
  const { is_scrolled_down_ref, is_scrolled_down } = useIsScrolledDown()

  return (
    <>
      <div
        ref={is_scrolled_down_ref}
        style={{
          position: "absolute",
          top: 0,
        }}
      />

      <StickyNav is_scrolled_down={is_scrolled_down} />

      <OtherStuff />
    </>
  )
}
```
