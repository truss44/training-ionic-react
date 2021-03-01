import React from "react";
import {
  IonRow,
  IonCol,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";

const InputControl: React.FC<{
  selectedValue: "mkg" | "ftlbs";
  onSelectedValue: (value: "mkg" | "ftlbs") => void;
}> = (props) => {
  const inputChangeHandler = (event: CustomEvent) => {
    props.onSelectedValue(event.detail.value);
  };

  return (
    <IonRow>
      <IonCol>
        <IonSegment
          onIonChange={inputChangeHandler}
          value={props.selectedValue}
        >
          <IonSegmentButton value="mkg">
            <IonLabel>m/kg</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="ftlbs">
            <IonLabel>ft/lbs</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonCol>
    </IonRow>
  );
};

export default InputControl;
