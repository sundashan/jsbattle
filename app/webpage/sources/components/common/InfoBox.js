export default class InfoBox extends React.Component {

  render() {
    if(!this.props.message && !this.props.children) return null;
    let boxClass = `alert alert-${this.props.level}`;
    return <div className={boxClass} role="alert">
      <strong>
        <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>&nbsp;{this.props.title != "" ? this.props.title : "Oh snap!"}
      </strong>
      <span> {this.props.message}{this.props.children}</span>
    </div>;
  }
}
