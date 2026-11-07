# Example: a bookings screen from this kit

The home screen of a cleaning-service booking app, composed only from
components in `src/components/`.

```tsx
import { useState } from "react";
import { View } from "react-native";
import {
  Screen,
  Header,
  Card,
  ListItem,
  Badge,
  Button,
  Modal,
  Avatar,
} from "./components";

interface Booking {
  id: string;
  client: string;
  service: string;
  time: string;
  price: string;
  status: "confirmed" | "pending";
}

const bookings: Booking[] = [
  { id: "1", client: "Anna Koval", service: "Deep cleaning, 2 bed", time: "Sat 9:00 AM", price: "$180", status: "confirmed" },
  { id: "2", client: "Mark Reed", service: "Regular cleaning, 1 bed", time: "Sat 12:30 PM", price: "$120", status: "pending" },
];

export default function BookingsScreen() {
  const [selected, setSelected] = useState<Booking | null>(null);

  return (
    <Screen>
      <Header title="Bookings" subtitle={`${bookings.length} this Saturday`} />

      <Card>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Avatar name="Anna Koval" />
          <View style={{ flex: 1 }}>
            <ListItem title="Next client: Anna Koval" subtitle="214 Pine Street" />
          </View>
          <Badge label="Confirmed" tone="success" />
        </View>
      </Card>

      {bookings.map((booking) => (
        <ListItem
          key={booking.id}
          title={`${booking.service} — ${booking.client}`}
          subtitle={booking.time}
          rightText={booking.price}
          onPress={() => setSelected(booking)}
        />
      ))}

      <Button title="New booking" onPress={() => {}} />

      <Modal
        visible={selected !== null}
        onClose={() => setSelected(null)}
        title={selected ? `Booking: ${selected.client}` : undefined}
      >
        {selected && (
          <>
            <Badge
              label={selected.status === "confirmed" ? "Confirmed" : "Pending"}
              tone={selected.status === "confirmed" ? "success" : "warning"}
            />
            <Button
              title="Cancel booking"
              variant="danger"
              onPress={() => setSelected(null)}
            />
            <Button
              title="Keep it"
              variant="secondary"
              onPress={() => setSelected(null)}
            />
          </>
        )}
      </Modal>
    </Screen>
  );
}
```

## Notes for agents

- The screen never touches `StyleSheet` directly: layout comes from
  `Screen`, tokens come from `theme.ts`.
- Status is rendered through `Badge` tones, not ad-hoc colored text, so a
  rebrand stays consistent.
- The modal is controlled (`visible` + `onClose`), which makes it
  testable and easy to drive from navigation state.
