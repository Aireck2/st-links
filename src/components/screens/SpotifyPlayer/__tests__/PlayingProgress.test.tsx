/**
 * @jest-environment jsdom
 */

import { PlayingProgress } from "@/components/screens";
import { render } from "@testing-library/react";
import "jest-styled-components";

const mockDuration = { raw: 12000, format: "2:00" };
const mockProgress = { raw: 6000, format: "1:00" };

describe("PlayingProgress", () => {
  test("render progress/duration text", () => {
    const component = render(
      <PlayingProgress duration={mockDuration} progress={mockProgress} />
    );

    const textDuration = component.getByText(mockDuration.format);
    const textProgress = component.getByText(mockProgress.format);

    expect(textDuration.textContent).toBe("2:00");
    expect(textProgress.textContent).toBe("1:00");
  });

  test("display correct styles", () => {
    const component = render(
      <PlayingProgress duration={mockDuration} progress={mockProgress} />
    );
    expect(component.container).toMatchSnapshot();
  });
});
