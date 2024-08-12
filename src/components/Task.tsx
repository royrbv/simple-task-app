import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import CheckBox from "expo-checkbox";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";

type TaskProps = {
  text: string;
  percentage: number;
};

const Task: React.FC<TaskProps> = ({ text, percentage }) => {
  const [open, setOpen] = useState(false);
  const animation2 = useSharedValue({ height: 400 });

  const animationStyles2 = useAnimatedStyle(() => {
    return {
      height: withTiming(animation2.value.height, { duration: 300 }),
    };
  });

  const animation = useSharedValue({ height: 10 });
  const animationStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(animation.value.height, { duration: 300 }),
    };
  });
  return (
    <>
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            if (open == false) {
              animation.value = { height: 400 };
              setOpen(true);
            }
          }}
        >
          <KeyboardAvoidingView
            style={[
              styles.containerTask,
              { borderColor: open ? "#b0b0b0" : "#fff" },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 9,
              }}
            >
              {!open && (
                <Text
                  style={[
                    styles.titleTask,
                    {
                      height: "auto",
                      paddingBottom: 6,
                      width: "80%",
                    },
                  ]}
                >
                  {text}
                </Text>
              )}
              {open && (
                <TextInput
                  multiline={true}
                  style={[
                    styles.titleTask,
                    {
                      height: "auto",
                      width: "80%",
                      // backgroundColor: "yellow",
                      textAlignVertical: "top",
                      // borderBottomWidth: 1,
                      // borderColor: "red",
                    },
                  ]}
                  enterKeyHint="done"
                  defaultValue={text}
                />
              )}
              {open && (
                <>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#e0e0e0",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 30,
                      height: 30,
                      borderRadius: 20,
                      marginRight: 8,
                    }}
                    onPress={() => {
                      animation2.value = { height: 10 };
                      setOpen(false);
                    }}
                  >
                    <FontAwesome6
                      name="ellipsis"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#e0e0e0",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 30,
                      height: 30,
                      borderRadius: 20,
                    }}
                    onPress={() => {
                      animation2.value = { height: 10 };
                      setOpen(false);
                    }}
                  >
                    <FontAwesome6
                      name="arrow-up"
                      style={{ fontSize: 16, fontWeight: "bold" }}
                    />
                  </TouchableOpacity>
                </>
              )}
            </View>
            {!open && (
              <Text
                style={[
                  styles.descTask,
                  {
                    height: "auto",
                  },
                ]}
              >
                In Android you cannot draw outside of the component's
                boundaries,
              </Text>
            )}
            {open && (
              <TextInput
                multiline={true}
                style={[
                  styles.descTask,
                  {
                    height: "auto",
                    textAlignVertical: "top",
                    // borderBottomWidth: 1,
                    // borderColor: "red",
                  },
                ]}
                enterKeyHint="done"
                defaultValue="In Android you cannot draw outside of the component's boundaries,"
              />
            )}
            <Text style={styles.subTaskCount}>4/10</Text>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>

        <Animated.View
          style={[
            styles.containerTaskBottom,
            animationStyles,
            animationStyles2,
            {
              borderWidth: open ? 2 : 0,
              borderTopWidth: 0,
              borderColor: "#b0b0b0",
            },
          ]}
        >
          {open && (
            <ScrollView
              nestedScrollEnabled={true}
              style={{ paddingHorizontal: 22, marginBottom: 10 }}
            >
              <SubTask textSub={"Mencuci Motor"} />
              <SubTask textSub={"Mencuci Handuk"} />
              <SubTask textSub={"Mencuci Jam"} />
              <SubTask textSub={"Mencuci Teras"} />
              <SubTask textSub={"Mencuci Kursi"} />
              <SubTask
                textSub={
                  "ddddjadbaj lbajdbajbd ajsbajbsajbsajsaibsj vauisbasb jj hjhjhj isbiausb isabaousba saousbaiu"
                }
              />
              <SubTask textSub={"Mencuci Handuk"} />
              <SubTask textSub={"Mencuci Jam"} />
              <SubTask textSub={"Mencuci Motor"} />
              <SubTask textSub={"Mencuci Handuk"} />
              <SubTask textSub={"Mencuci Jam"} />
              <SubTask textSub={"Mencuci Teras"} />
              <SubTask textSub={"Mencuci Kursi"} />
              <SubTask textSub={"Mencuci Motor"} />
              <SubTask textSub={"Mencuci Handuk"} />
              <SubTask textSub={"Mencuci Jam"} />
              <AddSubTask />
            </ScrollView>
          )}
          <View
            style={[
              styles.progressBarTask,
              {
                width: percentage ? `${percentage}%` : 0,
                backgroundColor:
                  percentage <= 25
                    ? "#ffd0d0"
                    : percentage > 25 && percentage <= 50
                    ? "#ffe4d0"
                    : percentage > 50 && percentage <= 75
                    ? "#fff7d0"
                    : percentage == 100
                    ? "#d6ffd0"
                    : "red",
              },
            ]}
          />
        </Animated.View>
      </View>
    </>
  );
};

export default Task;

type SubTaskProps = {
  textSub: string;
  descSub?: string;
};

const SubTask = ({ textSub, descSub }: SubTaskProps) => {
  const [complete, setComplete] = useState(false);
  const [showDel, setShowDel] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          marginVertical: 6,
          width: "90%",
          // backgroundColor: "yellow",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={[
            styles.checkListSubTask,
            { backgroundColor: complete ? "black" : "white" },
          ]}
          onPress={() => {
            complete ? setComplete(false) : setComplete(true);
          }}
        >
          {complete && (
            <FontAwesome6
              name="check"
              style={{ fontSize: 13, color: "#fff" }}
            />
          )}
        </TouchableOpacity>
        <TextInput
          multiline={true}
          onFocus={() => {
            setShowDel(true);
          }}
          onBlur={() => {
            setShowDel(false);
          }}
          style={styles.descSubTask}
        >
          {textSub}
        </TextInput>
      </View>
      {showDel && (
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: 23,
            height: 23,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
          }}
        >
          <FontAwesome6 name="xmark" style={{ fontSize: 16, color: "white" }} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const AddSubTask = () => {
  return (
    <View
      style={{
        height: 50,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        style={{
          height: 22,
          width: 22,
          borderWidth: 2,
          borderRadius: 7,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome6 name="add" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTask: {
    paddingTop: 17,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderWidth: 2,
    borderBottomWidth: 0,
    backgroundColor: "#f9f9f9",
    marginHorizontal: 10,
    marginTop: 7,
    paddingBottom: 7,
    paddingHorizontal: 20,
  },
  containerTaskBottom: {
    justifyContent: "space-between",
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    backgroundColor: "#f9f9f9",
    // paddingTop:3,
    elevation: 1,
    marginHorizontal: 10,
    overflow: "hidden",
  },
  titleTask: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  descTask: {
    fontSize: 16,
    fontWeight: "300",
    marginBottom: 2,
  },
  descSubTask: {
    fontSize: 16,
    fontWeight: "300",
    // backgroundColor: "yellow",
    flex: 1,
  },
  subTaskCount: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "right",
    color: "#a0a0a0",
  },
  progressBarTask: {
    height: 10,
    borderRadius: 10,
    elevation: 5,
    verticalAlign: "bottom",
  },
  checkListSubTask: {
    height: 22,
    width: 22,
    borderWidth: 2,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});
