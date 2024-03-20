import Calendar from "@components/calendar/Calendar";
import { render } from "@testing-library/react-native";

describe("<Calendar />", () => {
  it("renders correctly", () => {
    const tree = render(<Calendar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
