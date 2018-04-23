import { connect } from 'react-redux';

export default (mapStateToProps, mapDispatchToProps) => {
  const mapStateToPropsWithMobile = state => ({
    ...(mapStateToProps ? mapStateToProps(state) : {}),
    currentUser: state.auth.user,
    isMobile: state.mobile.isMobile
  });
  return connect(mapStateToPropsWithMobile, mapDispatchToProps);
}
