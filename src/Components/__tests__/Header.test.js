import * as React from "react";
import OfferHeader from "../Header/OfferHeader";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("checking the scroll of offers Header", async () => {
  render(<OfferHeader />);
  const offerBox = screen.getByTestId("offerWrapper");

  const rightScroll = screen.getByRole("button", { id: /rightarrowkey/i });
  userEvent.click(rightScroll);
  await new Promise((resolve) => setTimeout(resolve, 0));
  await waitFor(() => {
    expect(offerBox.style.marginLeft).toBe("-310px");
  });

  const leftScroll = screen.getByRole("button", { id: /leftarrowkey/i });
  userEvent.click(leftScroll);
  await new Promise((resolve) => setTimeout(resolve, 0));
  await waitFor(() => {
    expect(offerBox.style.marginLeft).toBe("0px");
  });
});
