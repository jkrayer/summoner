import React from 'react';
import Toc from './toc';
import RadioContainer from './radio-container';
import style from '../style/toc-container.css';

function sanitizeInput(input, filterBy) {
  if (filterBy === 'challenge_rating') {
    return input.replace(/[^\d/]/, '').trim();
  }
  return input.replace(/[^a-z-'\s]/gi, '').trimLeft();
}

export default class TocWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      filterBy: 'name',
      filteredData: this.props.monsters
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
      filteredData: this.props.monsters
    });
  }
  onFilterChange(event) {
    const input = sanitizeInput(event.target.value, this.state.filterBy);

    if (!input) {
      return this.setState({
        filter: '',
        filteredData: this.props.monsters
      });
    }

    this.timer = setTimeout(() => this.filterData(), 200);
    return this.setState({ filter: input });
  }
  filterData() {
    const { filter, filterBy } = this.state;

    if (!filter) { return; }

    const reg = filterBy === 'challenge_rating' ? new RegExp(['^', filter, ' '].join('')) : new RegExp(filter, 'i');

    new Promise((resolve) => {
      const filteredData = this.props.monsters.filter((monster) => {
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
    const { setSelectedMonster } = this.props;
    const { filter, filterBy, filteredData } = this.state;

    return (
      <div>
        <form className={style.form}>
          <RadioContainer
            checked={filterBy}
            event={this.onFilterByChange}
            legend={'Filter by:'}
            name={'filterby'}
            radios={[
              { val: 'name', label: 'Name' },
              { val: 'challenge_rating', label: 'Challenge Rating' },
              { val: 'type', label: 'Type' },
              { val: 'subtype', label: 'SubType' }
            ]}
          />
          <div className={style['input-wrapper']}>
            <label
              className={style.label}
              htmlFor="filter"
            >{'Filter'}
            </label>
            <input
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              autoFocus
              className={style.input}
              maxLength="100"
              name="filter"
              onChange={this.onFilterChange}
              id="filter"
              type="text"
              value={filter}
            />
          </div>
        </form>
        <Toc
          buttonEvent={setSelectedMonster}
          data={filteredData}
        />
      </div>
    );
  }
}

TocWrapper.propTypes = {
  setSelectedMonster: React.PropTypes.func,
  monsters: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  )
};
