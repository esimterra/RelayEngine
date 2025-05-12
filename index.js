module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const payload = req.body;

  // 输出收到的数据（用于调试）
  console.log('📦 Received Webhook Payload:', payload);

  // 示例：提取关键信息
  const orderId = payload.order_id;
  const email = payload.email;
  const sku = payload.sku;

  // TODO: 在这里可以添加逻辑，例如：转发到 eSIM 提供商 API，或者写入数据库

  // 返回响应，代表收到并处理成功
  return res.status(200).json({
    message: '✅ Webhook received successfully',
    data: {
      orderId,
      email,
      sku,
    },
  });
};
