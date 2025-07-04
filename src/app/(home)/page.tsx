import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";





export default function Home() {
  return(
    <div>
      <Button variant="elevated">
        I am a button
      </Button>
      <Input placeholder="I am an input" />
      <Progress value={50} />
      <Textarea placeholder="I am a textarea" />
      <Checkbox />
    </div>
  ) 
};

