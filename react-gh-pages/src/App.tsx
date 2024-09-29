import React from 'react';

const gif = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYThxZW1vMXI2NjVjbjE3ejRsemlkY295ZndsZTZuMWtkOHNwbm02eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14abFyeRqOtane/200.webp';

const Content = () => {
  return (
    <div>
      <h1 style={{ 'textAlign': 'center' }}>Work in progress</h1>
      <br />
      <br />
      <img style={{ 'margin': 'auto', 'display': 'block' }} src={gif} />
    </div>
  )
}

const App = () => <Content />;

export default App;
