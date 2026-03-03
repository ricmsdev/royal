import { PasswordGate } from "@/components/PasswordGate";
import { PitchContainer } from "@/components/pitch/PitchContainer";

export default function Home() {
  return (
    <PasswordGate>
      <PitchContainer />
    </PasswordGate>
  );
}
