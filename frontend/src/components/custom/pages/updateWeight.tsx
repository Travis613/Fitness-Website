import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserForm } from "../simple/userForm";

export function UpdateWeight() {
  return (
    <Card className="max-w-2xl mx-auto my-2">
      <CardHeader>
        <CardTitle>Edit Entry</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-1">
          <div className="w-1/2">
            <Label>Time</Label>
            <Input type="time" />
          </div>
          <div className="w-1/2">
            <Label>Date</Label>
            <Input type="date" />
          </div>
        </div>
        <UserForm page="Update" />
      </CardContent>
    </Card>
  );
}
