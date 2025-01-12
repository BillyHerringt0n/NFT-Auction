import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface BidInputProps {
  currentBid: number;
  onBidSubmit: (amount: number) => void;
}

export const BidInput = ({ currentBid, onBidSubmit }: BidInputProps) => {
  const [bidAmount, setBidAmount] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(bidAmount);
    
    if (isNaN(amount)) {
      toast.error("Please enter a valid amount");
      return;
    }
    
    if (amount <= currentBid) {
      toast.error("Bid must be higher than current bid");
      return;
    }

    onBidSubmit(amount);
    setBidAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="number"
        step="0.01"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
        placeholder={`Min bid: ${currentBid + 0.01} ETH`}
        className="flex-1"
      />
      <Button type="submit" variant="secondary">
        Place Bid
      </Button>
    </form>
  );
};