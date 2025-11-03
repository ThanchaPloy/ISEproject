import PocketBase from 'pocketbase';

export default async function pbAuth(req, res, next) {
  try {
    const header = req.headers.authorization || '';
    if (!header.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Missing Bearer token' });
    }
    const token = header.slice(7);
    const pb = new PocketBase(process.env.POCKETBASE_URL || 'http://127.0.0.1:8090');
    pb.authStore.save(token, null);
    const { token: refreshed, record } = await pb.collection('users').authRefresh();
    req.user = { id: record?.id, email: record?.email, name: record?.name, avatar: record?.avatar };
    res.locals.pbToken = refreshed;
    next();
  } catch {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
}