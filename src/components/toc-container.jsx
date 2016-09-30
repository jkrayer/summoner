import React from 'react';
import Toc from './toc';
import style from '../style/form.css';

function sanitizeInput(input, filterBy) {
  if (filterBy === 'challenge_rating') {
    return input.replace(/[^\d/]/, '').trim();
  }
  return input.replace(/[^a-z-']/gi, '').trim();
}

export default class TocContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      filterBy: 'name',
      filteredData: this.props.data
    };
    this.validFilters = ['name', 'challenge_rating', 'type', 'subtype', 'terrain'];
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onFilterByChange = this.onFilterByChange.bind(this);
  }
  onFilterByChange(event) {
    let input = event.target.value;
    input = (this.validFilters.indexOf(input) !== -1) ? input : 'name';
    this.setState({
      filter: '',
      filterBy: input,
      filteredData: this.props.data
    });
  }
  onFilterChange(event) {
    const input = sanitizeInput(event.target.value, this.state.filterBy);

    if (!input) {
      return this.setState({
        filter: '',
        filteredData: this.props.data
      });
    }

    this.timer = setTimeout(() => this.filterData(), 200);
    return this.setState({ filter: input });
  }
  filterData() {
    const { filter, filterBy } = this.state;

    if (!filter) { return; }

    const reg = filterBy === 'challenge_rating' ? new RegExp('^' + filter + ' ') : new RegExp(filter, 'gi');

    new Promise((resolve) => {
      const filteredData = this.props.data.filter((monster) => {
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
  render() {
    const { buttonEvent } = this.props;
    const { filter, filterBy, filteredData } = this.state;

    return (
      <div>
        <form className={style['form-inline']}>
          <fieldset>
            <legend>{'Filter By:'}</legend>
            <div className={style['input-wrapper']}>
              <label htmlFor="filterby">{'Property:'}</label>
              <select
                id="filterby"
                onChange={this.onFilterByChange}
                value={filterBy}
              >
                <option value="name">{'Name'}</option>
                <option value="challenge_rating">{'Challenge Rating'}</option>
                <option value="type">{'Type'}</option>
                <option value="subtype">{'SubType'}</option>
              </select>
            </div>
            <div className={style['input-wrapper']}>
              <label htmlFor="filter">{'Filter'}</label>
              <input
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
                autoFocus
                maxLength="100"
                name="filter"
                onChange={this.onFilterChange}
                id="filter"
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

TocContainer.propTypes = {
  buttonEvent: React.PropTypes.func,
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  )
};
