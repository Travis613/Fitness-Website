import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserForm } from "../simple/userForm";

export function UpdateWeight() {
  return (
    <Card className="max-w-2xl mx-auto my-2">
      <CardHeader>
        <CardTitle>Edit Entry</CardTitle>
      </CardHeader>
      <CardContent>
        <UserForm page="Update" />
      </CardContent>
    </Card>
  );
}
