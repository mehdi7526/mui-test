"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button variant="outlined" onClick={() => router.back()} sx={{ mb: 2 }}>
      بازگشت
    </Button>
  );
};

export default BackButton;
