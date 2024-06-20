import App from '../App'
import { render, screen} from "@testing-library/react";





    test("verifica del componente SingleBook", () => {
    render(<App/>);
    const bookCard = screen.getAllByTestId('bookCard');
    expect(bookCard).toHaveLength(150);
});




