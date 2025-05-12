module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const payload = req.body;

  // 示例逻辑：打印接收到的订单信息
  console.log('Received Order:', payload);

  // 回复供应商收到成功
  res.status(200).json({ message: 'Order received', order: payload.order_id });
};
