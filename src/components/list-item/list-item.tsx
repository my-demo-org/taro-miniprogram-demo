import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./list-item.scss";

interface ListItemProps {
  onClick?: () => void;
}

export default class ListItem extends Taro.Component<ListItemProps> {
  handleClick() {
    this.props.onClick && this.props.onClick();
  }

  render() {
    return (
      <View className="list-item" onClick={this.handleClick.bind(this)}>
        {this.props.children}
      </View>
    );
  }
}
