import { StringSearch } from "../src/Algorithms/Searching/StringSearch";

describe("should return the count for the number of times a pattern appears in a sentence", () => {
  it("StringSearch('i was a method a', 'a') will return 4", () => {
    expect(StringSearch("ai was a method a", "a")).toBe(4);
  });
  it("StringSearch('i was a method was', 'was') will return 2", () => {
    expect(StringSearch("i was a method was", "was")).toBe(2);
  });
  it("StringSearch('i was a method a', 'as') will return 1", () => {
    expect(StringSearch("i was a method a", "as")).toBe(1);
  });
  it("StringSearch('i was a method called callux clam calm', 'cal') will return 3", () => {
    expect(StringSearch("i was a method called callux clam calm", "cal")).toBe(
      3
    );
  });
});
