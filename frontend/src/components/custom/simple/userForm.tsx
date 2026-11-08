import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { deleteEntry, logWeight, updateEntry } from "@/services/weightServices";
import { Check, Trash } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  page: "Update" | "Log";
}

export function UserForm({ page }: Props) {
  const [weight, setWeight] = useState(0);
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const location = useLocation();
  const navigator = useNavigate();

  const userId = location.state?.id;

  return (
    <>
      {page === "Update" ? (
        <div className="flex gap-1">
          <div className="w-1/2">
            <Label>Time</Label>
            <Input
              type="time"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
            />
          </div>
          <div className="w-1/2">
            <Label>Date</Label>
            <Input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="flex items-center justify-start w-full my-15">
        <div>
          <Label>Weight</Label>
          <input
            type="number"
            step={0.1}
            className="border-0 w-full text-5xl"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>
        <Badge
          variant={"secondary"}
          className="border-blue-300 bg-blue-100 text-blue-700 px-3 py-2 "
        >
          LBS
        </Badge>
      </div>
      <div className="flex flex-col gap-2 py-5">
        <Label>NOTE</Label>
        <Input
          value={note}
          className="py-7"
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div>
        {page === "Log" ? (
          <Button //maybe make me a component
            className="bg-blue-500 hover:bg-blue-400 w-full py-7"
            onClick={() => {
              logWeight(weight, note);
              setWeight(0);
              setNote("");
            }}
          >
            <Check />
            Save Entry
          </Button>
        ) : (
          <div className="flex justify-between mx-2">
            <Button
              variant={"destructive"}
              className={"min-w-1/5"}
              onClick={() => {
                deleteEntry(userId);
                navigator("/viewWeights");
              }}
            >
              <Trash /> Delete
            </Button>
            <div className="flex gap-4">
              <Button
                variant={"outline"}
                className="min-w-1/4"
                onClick={() => navigator("/viewWeights")}
              >
                Cancel
              </Button>
              <Button // <-- cause im used twice
                className="bg-blue-500 hover:bg-blue-400 min-w-1/2"
                onClick={() => {
                  updateEntry(userId, weight, note, time, date);
                  navigator("/viewWeights");
                }}
              >
                Save Entry
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
