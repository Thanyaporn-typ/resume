<template>
    <div class="container py-5">
        <div class="card shadow-lg">
            <!-- card-header -->
            <div
                class="card-header bg-success text-white d-flex flex-wrap justify-content-between align-items-center gap-2">
                <div class="d-flex align-items-center flex-grow-1 flex-wrap">
                    <img :src="require('@/assets/logo.jpg')" alt="โลโก้" height="60"
                        class="me-3 rounded-circle mb-2 mb-md-0" />
                    <h5 class="mb-0 text-break">
                        <i class="fas fa-fish me-2"></i> ระบบจัดการออเดอร์ปลาส้ม
                    </h5>
                </div>
                <div class="d-flex gap-2">
                    <button class="btn btn-warning" @click="nextRound">
                        <i class="fas fa-redo"></i> เปิดรอบใหม่
                    </button>
                    <button class="btn btn-danger" @click="resetAll">
                        <i class="fas fa-trash"></i> เริ่มระบบใหม่
                    </button>
                </div>
            </div>


            <div class="card-body">
                <div class="mb-4">
                    <strong>รอบปัจจุบัน:</strong> {{ roundTitles[currentRound] || 'รอบ ' + currentRound }}
                </div>

                <div class="row mb-3">
                    <div class="col-md-8">
                        <input type="text" class="form-control" v-model="roundTitles[currentRound]"
                            placeholder="ชื่อรอบ เช่น รอบประจำสัปดาห์ 16-22 ก.ค." />
                    </div>
                    <div class="col-md-4 text-end">
                        <button class="btn btn-outline-success" @click="exportCSV(currentRound)">
                            <i class="fas fa-file-csv"></i> ดาวน์โหลด CSV รอบนี้
                        </button>
                    </div>
                </div>

                <!-- ฟอร์มออเดอร์ -->
                <div class="row g-3 mb-4">
                    <div class="col-md-3">
                        <label class="form-label">สินค้า</label>
                        <select v-model="newOrder.product" class="form-select">
                            <option disabled value="">-- กรุณาเลือกสินค้า --</option>
                            <option v-for="item in products" :key="item.id" :value="item.name">
                                {{ item.name }}
                            </option>
                        </select>
                    </div>

                    <div class="col-md-2">
                        <label class="form-label">จำนวน (กก.)</label>
                        <input type="number" v-model.number="newOrder.kg" min="1" class="form-control" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">ชื่อลูกค้า</label>
                        <input type="text" v-model="newOrder.customer" class="form-control" placeholder="ชื่อ-สกุล" />
                    </div>

                    <div class="col-md-3">
                        <label class="form-label">ที่อยู่จัดส่ง</label>
                        <input type="text" v-model="newOrder.address" class="form-control" placeholder="ที่อยู่" />
                    </div>

                    <div class="col-md-1">
                        <label class="form-label">สถานะ</label>
                        <select v-model="newOrder.status" class="form-select">
                            <option value="ยังไม่ชำระ">ยังไม่ชำระ</option>
                            <option value="ชำระแล้ว">ชำระแล้ว</option>
                        </select>
                    </div>

                    <div class="col-12 text-end mt-3">
                        <button class="btn btn-success px-4" @click="addOrder">
                            <i class="fas fa-plus me-2"></i>เพิ่มออเดอร์
                        </button>
                    </div>
                </div>
                <!-- ตารางออเดอร์ -->
                <div class="accordion mt-4" id="roundAccordion">
                    <div class="accordion-item" v-for="(orders, round) in rounds" :key="round">
                        <h2 class="accordion-header" :id="'heading-' + round">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#collapse-' + round" :aria-expanded="round === currentRound"
                                :aria-controls="'collapse-' + round">
                                {{ roundTitles[round] || 'รอบที่ ' + round }} ({{ orders.length }} รายการ)
                            </button>
                        </h2>
                        <div :id="'collapse-' + round" class="accordion-collapse collapse"
                            :class="{ show: round === currentRound }" :aria-labelledby="'heading-' + round"
                            data-bs-parent="#roundAccordion">
                            <div class="accordion-body p-0">
                                <div class="table-responsive">
                                    <table class="table table-bordered table-striped text-center align-middle mb-0">
                                        <thead class="table-light">
                                            <tr>
                                                <th>#</th>
                                                <th>สินค้า</th>
                                                <th>จำนวน (กก.)</th>
                                                <th>ลูกค้า</th>
                                                <th>ที่อยู่จัดส่ง</th>
                                                <th>สถานะ</th>
                                                <th>รวม (บาท)</th>
                                                <th>จัดการ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-if="orders.length === 0">
                                                <td colspan="8">ยังไม่มีออเดอร์</td>
                                            </tr>
                                            <tr v-for="(order, index) in orders" :key="index">
                                                <td>{{ index + 1 }}</td>
                                                <td><input v-model="order.product_name"
                                                        class="form-control form-control-sm" /></td>
                                                <td><input v-model.number="order.quantity_kg" type="number" min="1"
                                                        class="form-control form-control-sm" /></td>
                                                <td><input v-model="order.customer_name"
                                                        class="form-control form-control-sm" /></td>
                                                <td><input v-model="order.delivery_address"
                                                        class="form-control form-control-sm" /></td>
                                                <td>
                                                    <select v-model="order.status" class="form-select form-select-sm">
                                                        <option value="ยังไม่ชำระ">ยังไม่ชำระ</option>
                                                        <option value="ชำระแล้ว">ชำระแล้ว</option>
                                                    </select>
                                                </td>
                                                <td>{{ order.quantity_kg * pricePerKg | currency }}</td>
                                                <td class="d-flex gap-1 justify-content-center flex-wrap">
                                                    <button class="btn btn-sm btn-outline-success"
                                                        @click="updateOrder(order)">
                                                        บันทึก
                                                    </button>
                                                    <button class="btn btn-sm btn-outline-danger"
                                                        @click="deleteOrder(round, index, order.id)">
                                                        ลบ
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="alert alert-info mt-4">
                    <strong>ยอดรวมรอบ {{ currentRound }}:</strong> {{ totalKg }} กก. /
                    <strong>{{ totalPrice | currency }} บาท</strong>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Swal from 'sweetalert2'

export default {
    data() {
        return {
            pricePerKg: 170,
            currentRound: 1,
            rounds: {},
            roundTitles: {},
            newOrder: {
                product: '',
                kg: 1,
                customer: '',
                address: '',
                status: 'ยังไม่ชำระ',
            },
            products: [
                { id: 1, name: 'ปลาส้มปลาจีน' },
                { id: 2, name: 'ปลาส้มปลาตะเพียน' },
                { id: 3, name: 'ปลาส้มแผ่น' },
            ],
        };
    },
    computed: {
        totalKg() {
            return (this.rounds[this.currentRound] || []).reduce((sum, o) => sum + o.quantity_kg, 0);
        },
        totalPrice() {
            return this.totalKg * this.pricePerKg;
        },
    },
    methods: {
        async loadRounds() {
            const res = await fetch('https://origin-console-service.onrender.com/api/order/rounds');
            const data = await res.json();
            data.forEach(round => {
                this.$set(this.rounds, round.id, []);
                this.$set(this.roundTitles, round.id, round.title);
            });
            if (data.length > 0) {
                this.currentRound = data[0].id;
                this.loadOrders(this.currentRound);
            }
        },
        async loadOrders(roundId) {
            const res = await fetch(`https://origin-console-service.onrender.com/api/order/rounds/${roundId}/orders`);
            const orders = await res.json();
            this.$set(this.rounds, roundId, orders);
        },
        async nextRound() {
            const title = this.roundTitles[this.currentRound] || `รอบที่ ${this.currentRound}`;
            const res = await fetch('https://origin-console-service.onrender.com/api/order/rounds', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title })
            });
            const data = await res.json();
            this.currentRound = data.id;
            this.$set(this.rounds, data.id, []);
            this.$set(this.roundTitles, data.id, data.title);
        },
        async addOrder() {
            const order = {
                round_id: this.currentRound,
                product_name: this.newOrder.product,
                quantity_kg: this.newOrder.kg,
                customer_name: this.newOrder.customer,
                delivery_address: this.newOrder.address,
                status: this.newOrder.status,
            };

            try {
                const res = await fetch('https://origin-console-service.onrender.com/api/order/orders', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(order)
                });

                if (!res.ok) throw new Error('Add order failed');

                const data = await res.json();
                this.rounds[this.currentRound].push(data);

                this.newOrder = { product: '', kg: 1, customer: '', address: '', status: 'ยังไม่ชำระ' };

                Swal.fire({
                    icon: 'success',
                    title: 'เพิ่มออเดอร์เรียบร้อย',
                    timer: 1500,
                    showConfirmButton: false
                });
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'เกิดข้อผิดพลาด',
                    text: 'ไม่สามารถเพิ่มออเดอร์ได้'
                });
                console.error(err);
            }
        },

        async updateOrder(order) {
            const payload = {
                product_name: order.product_name,
                quantity_kg: order.quantity_kg,
                customer_name: order.customer_name,
                delivery_address: order.delivery_address,
                status: order.status
            };

            try {
                const res = await fetch(`https://origin-console-service.onrender.com/api/order/orders/${order.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!res.ok) throw new Error('Update failed');

                const data = await res.json();

                Swal.fire({
                    icon: 'success',
                    title: 'สำเร็จ',
                    text: 'อัปเดตออเดอร์เรียบร้อยแล้ว',
                    timer: 1500,
                    showConfirmButton: false,
                });

                console.log('Updated:', data);
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'เกิดข้อผิดพลาด',
                    text: 'ไม่สามารถอัปเดตออเดอร์ได้',
                });
                console.error(err);
            }
        },

        async deleteOrder(round, index, id) {
            try {
                const result = await Swal.fire({
                    title: 'ยืนยันการลบ?',
                    text: 'คุณต้องการลบออเดอร์นี้ใช่หรือไม่',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#6c757d',
                    confirmButtonText: 'ลบ',
                    cancelButtonText: 'ยกเลิก'
                });

                if (!result.isConfirmed) return;

                const res = await fetch(`https://origin-console-service.onrender.com/api/order/orders/${id}`, {
                    method: 'DELETE'
                });

                if (!res.ok) throw new Error('Delete failed');

                this.rounds[round].splice(index, 1);

                Swal.fire({
                    icon: 'success',
                    title: 'ลบสำเร็จ',
                    text: 'ออเดอร์ถูกลบแล้ว',
                    timer: 1500,
                    showConfirmButton: false
                });
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'เกิดข้อผิดพลาด',
                    text: 'ไม่สามารถลบออเดอร์ได้'
                });
                console.error(err);
            }
        },

        exportCSV(roundNumber) {
            const orders = this.rounds[roundNumber] || [];
            if (!orders.length) return alert('ไม่มีข้อมูลออเดอร์ในรอบนี้');
            const csv = [
                ['ลำดับ', 'สินค้า', 'จำนวน (กก.)', 'ลูกค้า', 'ที่อยู่', 'สถานะ', 'รวม (บาท)'],
                ...orders.map((o, i) => [
                    i + 1,
                    o.product_name,
                    o.quantity_kg,
                    o.customer_name,
                    o.delivery_address,
                    o.status || 'ยังไม่ชำระ',
                    o.quantity_kg * this.pricePerKg,
                ])
            ].map(row => row.join(',')).join('\n');
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.setAttribute('download', `orders_round_${roundNumber}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
        resetAll() {
            if (confirm('คุณต้องการล้างข้อมูลทั้งหมดและเริ่มต้นใหม่หรือไม่?')) {
                this.rounds = {};
                this.roundTitles = {};
                this.currentRound = 1;
            }
        },
    },
    created() {
        this.loadRounds();
    },
    filters: {
        currency(value) {
            return Number(value).toLocaleString('th-TH');
        },
    },
};
</script>
  
<style scoped>.card-header i {
    font-size: 1.2rem;
}</style>