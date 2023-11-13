export default [
  {
    title: 'สรุปภาพรวม',
    to: { name: 'index' },
    icon: { icon: 'tabler-dashboard' },
  },
  {
    title: 'รับรถ',
    to: { name: 'sale' },
    icon: { icon: 'tabler-bus' },
  },
  {
    title: 'รายงาน',
    icon: { icon: 'tabler-list' },
    show: true,
    children: [
      {title: 'รายวัน', to: 'report-per_day', show: true},
      // {title: 'ลูกค้า', to: 'user-customer', show: true}
    ]
  },
  {
    title: 'สมัครโปรโมชั่น / ผู้ใช้งานระบบ',
    icon: { icon: 'tabler-users' },
    show: true,
    children: [
      {title: 'พนักงาน', to: 'user-admin', show: true},
      {title: 'ลูกค้า', to: 'user-customer', show: true}
    ]
  },
  {
    title: 'Service / ค่าบริการ',
    icon: { icon: 'tabler-tag' },
    show: true,
    children: [
      {title: 'ประเภทค่าบริการ', to: 'service-group', show: true},
      {title: 'ค่าบริการ', to: 'service', show: true},
    ]
  },
  {
    title: 'แพ็คเกจ',
    icon: { icon: 'tabler-users' },
    show: true,
    children: [
      {title: 'แพ็คเกจ', to: 'reward', show: true},
    ]
  },
  {
    title: 'ตั้งค่าร้าน',
    to: { name: 'setting' },
    icon: { icon: 'tabler-settings' },
  },
]
