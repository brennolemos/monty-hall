import DoorModel from "../model/door";

export function createDoors(qty: number, selected: number): DoorModel[] {
  return Array.from({ length: qty }, (_, i) => {
    const number = i + 1;
    const awarded = number === selected;
    return new DoorModel(number, awarded);
  });
}

export function refreshDoors(
  doors: DoorModel[],
  modifiedDoor: DoorModel
): DoorModel[] {
  return doors.map((currentDoor) => {
    const isModified = currentDoor.number === modifiedDoor.number;

    if (isModified) {
      return modifiedDoor;
    }

    return modifiedDoor.opened ? currentDoor : currentDoor.unselect();
  });
}
