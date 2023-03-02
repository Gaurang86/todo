import { ADDTASK, DELETETASK, EDITTASK } from './constant'

export const addTask = (adtask) => ({ type: ADDTASK, payload: adtask })
export const deleTask = (delet) => ({ type: DELETETASK, payload: delet })
export const editTask = (editask) => ({ type: EDITTASK, payload: editask })
export const colorChange = (colorchange) => ({
  type: EDITTASK,
  payload: colorchange,
})
