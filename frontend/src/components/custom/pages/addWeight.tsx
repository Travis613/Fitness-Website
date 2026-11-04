import { Card, CardContent } from "@/components/ui/card";
import { UserForm } from "../simple/userForm";

export function AddWeight() {
  return (
    <Card className="max-w-lg mx-auto border-0 shadow-lg shadow-blue-100 my-4">
      <CardContent>
        <UserForm page="Log" />
      </CardContent>
    </Card>
  );
}
