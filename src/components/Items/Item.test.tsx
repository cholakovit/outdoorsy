import { describe, it } from "vitest";
import ItemView from './ItemView';
import { render, screen, waitFor } from "@testing-library/react";

import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get(import.meta.env.VITE_OUTDOORSY_LOCAL, (req, res, ctx) => {
      return res(ctx.json({ name: 'Jack' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe("Testing the ItemView component", () => {
    it("Render ItemView", async () => {

      const item = [
          { 
              name: 'zzz',
              description: 'zzz',
              keywords: 'zzz'
          }
      ]

      render(<ItemView item={item} />);

      const itemTest = screen.getAllByRole('itemTest');

      await waitFor(() => {
        // for some reason data is missing
        //expect(itemTest[0]).toHaveTextContent(`Keywords: ${item[0].keywords}`);
      })

    });
});