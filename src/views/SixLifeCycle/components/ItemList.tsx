import React, { FC, useState, useEffect } from 'react';
import { ScrollData } from './ScrollView';
import { listData } from '../../../mock';
import ScrollView from './ScrollView';
import './itemList.less';

const fetchData = (page): Promise<ScrollData> => {
  return new Promise((resolve) => {
    resolve({
      ...listData,
      page,
      list: listData.list.slice(5 * (page - 1), 5 * page),
    });
  });
};

export interface ItemProps {
  giftImage: string;
  giftName: string;
  price: string;
  id: string;
}

interface ItemComponentProps {
  item: ItemProps;
}

const Itemcp: FC<ItemComponentProps> = ({ item }) => {
  return (
    <div className="goods_item">
      <img src={item.giftImage} className="item_image" />
      <div className="item_content">
        <div className="goods_name">{item.giftName}</div>
        <div className="hold_price" />
        <div className="new_price">
          <div className="one view">￥{item.price}</div>
        </div>
        <img className="go_share go_text" />
      </div>
    </div>
  );
};

const ScrollExamples = () => {
  const [data, setData] = useState<ScrollData>({
    list: [],
    page: 0,
    pageCount: 1,
  });

  const getData = async () => {
    if (data.page === data.pageCount) return console.log('没有数据了');
    const res = await fetchData(data.page + 1);
    console.log('res', res);
    if (res.code === 200) {
      setData({
        ...res,
        list: res.page === 1 ? res.list : data.list.concat(res.list),
      });
    }
  };

  // 滚动到底部触发
  const handerScrollToLower = () => {
    console.log('scroll已经到底部');
    getData();
  };

  /* 初始化请求数据 */
  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView
      data={data} /*  */
      component={Itemcp} /* Item 渲染的单元组件 */
      scrollToLower={handerScrollToLower}
      scroll={() => {}}
    />
  );
};

export default ScrollExamples;
