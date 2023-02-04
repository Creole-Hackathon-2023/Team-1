import { Card, Space } from "antd";
const CategoryCard = () => {
  let data = [
    {
      id: 1,
      sports_Icon: "",
      sports_Name: "Cricket",
    },
    {
      id: 2,
      sports_Icon: "",
      sports_Name: "BasktBall",
    },
    {
      id: 3,
      sports_Icon: "",
      sports_Name: "VollyBall",
    },
    {
      id: 4,
      sports_Icon: "",
      sports_Name: "Football",
    },
    {
      id: 5,
      sports_Icon: "",
      sports_Name: "Tennis",
    },
    {
      id: 6,
      sports_Icon: "",
      sports_Name: "Cricket",
    },
  ];
  return (
    <>
      {data.map((item) => {
        return (
          <Space direction="vertical" size={16}>
            <Card
              size="small"
              title="Small size card"
              style={{
                width: 150,
                // backgroundColor: "red",
                height: 150,
              }}
            >
              <p>{item.sports_Icon}</p>
              <p>{item.sports_Name}</p>
            </Card>
          </Space>
        );
      })}
    </>
  );
};
export default CategoryCard;
