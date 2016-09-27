import React from 'react';
import Toc from './toc.jsx';
import style from '../style/form.css';

export default class TocContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      filterBy: 'name',
      filteredData: this.props.data
    };
    this.onFilterChange = this.onFilterChange.bind(this);
  }
  filterData() {
    const { filter, filterBy } = this.state;
    let reg;

    if (!filter) { return; }

    reg = new RegExp(filter, 'gi');

    new Promise((resolve) => {
      let filteredData = this.props.data.filter((monster) => {
        if (monster[filterBy]) {
          return reg.test(monster[filterBy]);
        }
        return false;
      });
      resolve(filteredData);
    }).then((filteredData) => {
      if (!this.state.filter) return;
      this.setState({
        filter,
        filterBy,
        filteredData
      });
    });
  }
  sanitizeInput(input) {
    return input.replace(/[^a-z-']/gi, '').trim();
  }
  onFilterChange(event) {
    const input = this.sanitizeInput(event.target.value);

    if (!input) {
      return this.setState({
        filter: '',
        filteredData: this.props.data
      });
    }

    this.setState({filter: input});
    this.timer = setTimeout(() => this.filterData(), 200);
  }
  render() {
    let { buttonEvent } = this.props;
    let { filter, filterBy, filteredData } = this.state;

    return (
      <div>
        <form className={style['form-inline']}>
          <fieldset>
            <legend>{"Filter By:"}</legend>
            <div className={style['input-wrapper']}>
              <label htmlFor="filterby">{"Filter By:"}</label>
              <input
                  id="filterby"
                  readOnly
                  type="text"
                  value={filterBy}
              />
            </div>
            <div className={style['input-wrapper']}>
              <label htmlFor="filter">{"Filter"}</label>
              <input
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect="off"
                  autoFocus
                  maxLength="100"
                  name="filter"
                  onChange={this.onFilterChange}
                  id="filter"
                  ref="filter"
                  type="text"
                  value={filter}
              />
            </div>
          </fieldset>
        </form>
        <Toc
          buttonEvent={buttonEvent}
          data={filteredData}
        />
      </div>
    );
  }
}

Toc.propTypes = {
  buttonEvent: React.PropTypes.func,
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  )
};
