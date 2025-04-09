export interface CommitEvent {
    type: string;
    created_at: string;
    payload: {
        commits: {
            message: string;
            url: string;
            author: {
                name: string;
            };
        }[];
    };
}
declare function App(): import("react/jsx-runtime").JSX.Element;
export default App;
