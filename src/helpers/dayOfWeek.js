const days = [
    'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'
]
export default (epoch) => days[new Date(epoch*1000).getDay()]
