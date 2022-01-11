import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { connect } from "react-redux";
function Layout({ children , user }) {
  return (
    <div>
      <Router>
        <Header user={user} />
        {children}
        <Footer />
      </Router>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.users.user,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
