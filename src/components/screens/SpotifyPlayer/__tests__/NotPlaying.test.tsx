/**
 * @jest-environment jsdom
 */

import { NotPlaying } from "@/components/screens";
import { render } from "@testing-library/react";
import "jest-styled-components";

describe("NotPlaying", () => {
  test("render text", () => {
    const textIn = "Not playing right now...";

    const component = render(<NotPlaying />);
    const text = component.getByText(textIn);

    expect(text.textContent).toBe(textIn);
  });

  test("display svg image", () => {
    render(<NotPlaying />);
    const image = document.querySelector("img");

    expect(image?.src).toContain("spotify.svg");
  });

  test("display correct size of svg image", () => {
    render(<NotPlaying />);
    const image = document.querySelector("img");

    expect(image?.width).toBe(50);
    expect(image?.height).toBe(50);
  });

  test("display correct styles", () => {
    const component = render(<NotPlaying />);

    expect(component.container.firstChild).toMatchSnapshot();
  });
});
