/**
 * @param {number[][]} meetings
 * @return {number}
 */
function meetingRooms(meetings) {
    let events = [];
    for(let meeting of meetings) {
        events.push([meeting[0], 1]); // start
        events.push([meeting[1], -1]); // end
    }
    events.sort((a,b) => a[0] === b[0] ? a[1] - b[1]: a[0] - b[0]);
    let maxRooms = 0;
    let currentRooms = 0;

    for(let event of events) {
        currentRooms += event[1];
        maxRooms = Math.max(maxRooms, currentRooms);
    }
    return maxRooms;
}