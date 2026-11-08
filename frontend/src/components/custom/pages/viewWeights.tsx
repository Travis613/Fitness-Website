import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";

import { fetchWeights } from "@/services/weightServices";
import type { Weight } from "@/types/weight";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil } from "lucide-react";

export function ViewWeights() {
  const [weights, setWeights] = useState<Weight[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchWeights().then((value) => setWeights(value));
  });

  return (
    <>
      <div className="max-w-2xl mx-auto mt-2 bg-white shadow-lg shadow-blue-100 p-6 border rounded-sm flex flex-col gap-5">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-medium">Weight History</h1>
            <p className="font-light text-sm">
              A chronological log of you daily weigh-ins and changes
            </p>
          </div>
          <Badge variant={"secondary"}>{weights.length} Entries</Badge>
        </div>
        <div className="flex flex-col gap-2">
          {weights.length > 0 ? (
            weights.map((value) => (
              <Item variant={"outline"} className="p-4" key={value.id}>
                <ItemContent>
                  <div className="flex justify-between">
                    <div>
                      <ItemTitle>
                        <p className="font-semibold">{value.date}</p>
                        <p className="font-light">{value.time}</p>
                      </ItemTitle>
                      <ItemDescription>{value.note}</ItemDescription>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                      <div className="flex gap-1 items-center">
                        <span className="text-lg font-medium">
                          {value.weight}
                        </span>
                        <p className="text-sm font-light">lbs</p>
                      </div>
                      <Pencil
                        size={17}
                        onClick={() =>
                          navigate("/updateWeight", { state: { id: value.id } })
                        }
                      />
                    </div>
                  </div>
                </ItemContent>
              </Item>
            ))
          ) : (
            <Item className="text-center">
              <ItemContent>No weights logged yet</ItemContent>
            </Item>
          )}
        </div>
      </div>
      <div className="max-w-full flex justify-center my-2">
        <Button
          className={"max-w-[60%] bg-blue-500 h-11 hover:bg-blue-400"}
          onClick={() => navigate("/")}
        >
          + Log Today's Weight
        </Button>
      </div>
    </>
  );
}
