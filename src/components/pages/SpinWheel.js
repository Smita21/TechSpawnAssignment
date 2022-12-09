import React from 'react';
import './styles.css';

 class SpinWheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      value:''
    };
    this.valueSelected = this.valueSelected.bind(this);
  }

  valueSelected() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);

      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 300);
    }
  }

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVariable = {
      '--notselected-item': items.length,
      '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';
   

    return (
      <div className="wheel-container">
        <div className={`wheel ${spinning}`} style={wheelVariable} onClick={this.valueSelected}>
          {items.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SpinWheel;