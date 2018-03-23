import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PhotoList from "../components/PhotoList";

import {
  removePhoto,
  upPhoto,
  downPhoto,
  leftPhoto,
  rightPhoto
} from "../actions/photos";

import photos from "../selectors/photos";

const selectors = { photos };

const actions = {
  removePhoto,
  upPhoto,
  downPhoto,
  leftPhoto,
  rightPhoto
};

export default connect(createStructuredSelector(selectors), actions)(PhotoList);
