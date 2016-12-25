import React from 'react';
import TocContainer from './c_toc';
import MonsterContainer from './c_monster';
import ModalContainer from './c_modal';
import AddMonsterContainer from './c_add-monster';
import SlidePanel from './slide-panel';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.setModal = this.setModal.bind(this);
  }
  setModal() {
    return (
      <ModalContainer>
        <AddMonsterContainer />
      </ModalContainer>
    );
  }
  render() {
    const { closeSlidePane, encounter, modalIsVisible, slidePanelVisable } = this.props;
    const modal = (modalIsVisible) ? this.setModal() : null;
    const name = (encounter.length) ? encounter[encounter.length - 1].name : null;
    return (
      <div>
        <TocContainer />
        <MonsterContainer />
        {modal}
        <SlidePanel
          closeEvent={closeSlidePane}
          show={slidePanelVisable}
          timer={3000}
        >
          <p>{['Added:', name].join(' ')}</p>
        </SlidePanel>
      </div>
    );
  }
}

Home.propTypes = {
  closeSlidePane: React.PropTypes.func.isRequired,
  encounter: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  ),
  modalIsVisible: React.PropTypes.bool.isRequired,
  slidePanelVisable: React.PropTypes.bool.isRequired
};
