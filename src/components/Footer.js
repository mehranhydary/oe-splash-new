import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <footer className="footer">
            <div className="container">
                <span className="text-muted">
                    &copy; 2018 - 2019 overeasy
                </span>
            </div>
        </footer>
      </div>
    );
  }
}